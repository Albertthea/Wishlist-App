import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DataService } from './gifts.service';
import firebase from 'firebase/compat';
import User = firebase.User;
import UserCredential = firebase.auth.UserCredential;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: Observable<any>;
  private _userData: User | null = null;
  private _errorMessage: string | null = null;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private dataService: DataService,
  ) {
    this.currentUser = this.fireAuth.authState;
  }

  get userData(): User | null {
    return this._userData;
  }

  get errorMessage(): string | null {
    return this._errorMessage;
  }

  init(): void {
    const cachedUserData = localStorage.getItem('user');

    if (cachedUserData) {
      this._userData = JSON.parse(cachedUserData);
    }
  }

  updateUserData(data: UserCredential): void {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('isLoggedIn', 'true');

    this._userData = data.user;
  }

  updateErrorMessage(code: string): void {
    switch (code) {
      case 'auth/invalid-email':
        this._errorMessage = 'E-mail должен быть в формате name@website.domain';
        break;
      case 'auth/user-disabled':
        this._errorMessage = 'Аккаунт деактивирован';
        break;
      case 'auth/user-not-found':
        this._errorMessage = 'Пользователь не найден';
        break;
      case 'auth/wrong-password':
        this._errorMessage = 'Неверный пароль';
        break;
      case 'auth/email-already-in-use':
        this._errorMessage = 'Пользователь с таким e-mail уже зарегистрирован';
        break;
      case 'auth/operation-not-allowed':
        this._errorMessage = 'Регистрация отключена';
        break;
      case 'auth/weak-password':
        this._errorMessage = 'Пароль должен быть не менее 6 символов';
        break;
      default:
        this._errorMessage = 'Неизвестная ошибка';
    }
  }

  signIn(email: string, password: string): void {
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this._errorMessage = null;
        this.updateUserData(result);
        this.router.navigate(['profile']);
      })
      .catch((error) => {
        this.updateErrorMessage(error.code);
      });
  }

  signUp(email: string, password: string): void {
    this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this._errorMessage = null;
        this.updateUserData(result);
        this.router.navigate(['profile']);
      })
      .catch((error) => {
        this.updateErrorMessage(error.code);
      });
  
  }

  signOut(): void {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      this._userData = null;
      this.router.navigate(['sign-in']);
    });
  }
}
