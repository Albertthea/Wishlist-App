import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { WishlistGift } from 'src/shared/modes/WishlistGift';

@Component({
  selector: 'app-wishlist-add-gift',
  templateUrl: './wishlist-add-gift.component.html',
  styleUrls: ['./wishlist-add-gift.component.less'],
})
export class WishlistAddGiftComponent implements OnInit {
  @Input() currentCategoryId: string | null = null;
  @Input() currentCategoryTitle: string | null = null;
  @Input() gift: WishlistGift | null = null;
  @Input() titleInitial: string | null = null;
  @Input() commentInitial: string | null = null;
  @Input() dateInitial = TuiDay.currentLocal();
  @Output() addGift = new EventEmitter<WishlistGift>();
  @Output() editGift = new EventEmitter<WishlistGift>();
  @Input() submitButtonText: string = 'Добавить';

  previousCategoryId = '';
  isFormExpanded = false;
  currentDate: TuiDay = TuiDay.currentLocal();

  form = new FormGroup({
    titleInput: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60),
    ]),

    commentInput: new FormControl('', Validators.maxLength(60)),
  });

  ngOnInit() {
    this.form.patchValue({
      titleInput: this.titleInitial,
      commentInput: this.commentInitial,
    });
  }

  constructor() {}

  get titleInput() {
    return this.form.get('titleInput') || { touched: false, errors: {} };
  }

  get commentInput() {
    return this.form.get('commentInput');
  }

  onSubmit(updatedGift: WishlistGift): void {
    this.editGift.emit(updatedGift);
  }

  submit(): void {
    const titleValue = this.form.get('titleInput')?.value;
    const commentValue = this.form.get('commentInput')?.value;

    if (this.form.valid) {
      if (commentValue) {
        this.addGift.emit({
          giftTitle: titleValue ?? '',
          giftComment: commentValue,
        });
      } else {
        this.addGift.emit({
          giftTitle: titleValue ?? '',
        });
      }

      this.form.reset({});
    } else {
      this.form.markAllAsTouched();
    }
  }
}
