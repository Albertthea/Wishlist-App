import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-wishlist-sign-in',
  templateUrl: './wishlist-sign-in.component.html',
  styleUrls: ['./wishlist-sign-in.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Поле обязательно для заполнения',
        email: 'Адрес должен быть в формате example@example.com',
        minlength: 'Длина пароля должна быть не менее 6 символов',
      },
    },
  ],
})
export class WishlistSignInComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const btn = document.querySelector('.auth-form__button') as HTMLElement;
    btn.addEventListener('mousedown', (event) => {
      if (this.form.invalid) {
        event.preventDefault();
      }
    });
  }

  private isButtonMoved: boolean = false;
  mode: 'sign-in' | 'sign-up' = 'sign-in';

  form = new FormGroup({
    emailInput: new FormControl('', [Validators.required, Validators.email]),
    passwordInput: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  toggleMode(): void {
    switch (this.mode) {
      case 'sign-in':
        this.mode = 'sign-up';
        break;
      case 'sign-up':
        this.mode = 'sign-in';
    }

    this.form.markAsUntouched();
  }

  sign(): void {
    const btn = document.querySelector('.auth-form__button') as HTMLElement;
    const formEl = document.querySelector('.auth-form') as HTMLFormElement;

    if (this.form.valid) {
      const email = this.form.get('emailInput')?.value;
      const password = this.form.get('passwordInput')?.value;

      console.log(
        `Signing ${
          this.mode === 'sign-in' ? 'in' : 'up'
        } with email: ${email} and password: ${password}`
      );
      btn.style.transform = '';
      btn.style.transition = '';
    } else if (!this.form.valid) {
      // Toggle the isButtonMoved flag and calculate the position
      this.isButtonMoved = !this.isButtonMoved;
      const position = this.isButtonMoved ? 130 : 0;
      btn.style.transform = `translate(${position}px, 0px)`;
      btn.style.transition = 'all 0.3s ease';
      this.form.markAllAsTouched();
    } else {
      return;
    }
  }
}
