import { Component } from '@angular/core';
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
export class WishlistSignInComponent {
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
    if (this.form.valid) {
      const email = this.form.get('emailInput')?.value;
      const password = this.form.get('passwordInput')?.value;

      if (this.mode === 'sign-in') {
        console.log(`Signing in with email: ${email} and password: ${password}`);
      } else if (this.mode === 'sign-up') {
        console.log(`Signing up with email: ${email} and password: ${password}`);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}