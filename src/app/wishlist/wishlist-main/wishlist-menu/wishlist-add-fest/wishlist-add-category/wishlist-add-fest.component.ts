import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { WishlistFest } from 'src/shared/modes/WishlistFest';

@Component({
  selector: 'app-wishlist-add-fest',
  templateUrl: './wishlist-add-fest.component.html',
  styleUrls: ['./wishlist-add-fest.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Поле обязательно для заполнения',
        maxlength: 'Максимальная длина - 20 символов',
      },
    },
  ],
})
export class WishlistAddFestComponent implements OnInit {
  @Input() fest: WishlistFest | null = null;
  @Input() mode: 'add' | 'edit' = 'add';
  @Output() addFest = new EventEmitter<WishlistFest>();
  @Output() editFest = new EventEmitter<WishlistFest>();

  form = new FormGroup({
    inputTitle: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });

  ngOnInit() {
    if (this.mode === 'edit') {
      this.form.patchValue({
        inputTitle: this.fest?.festTitle,
      });
    }
  }

  submit(): void {
    if (this.form.valid) {
      if (this.mode === 'add') {
        this.addFest.emit({
          festId: String(Math.random()),
          festTitle: this.form.get('inputTitle')?.value || '',
          gifts: [],
        });
      } else if (this.mode === 'edit') {
        this.editFest.emit({
          festId: this.fest?.festId || '',
          festTitle: this.form.get('inputTitle')?.value || '',
          gifts: this.fest?.gifts || [],
        });
      }

      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
