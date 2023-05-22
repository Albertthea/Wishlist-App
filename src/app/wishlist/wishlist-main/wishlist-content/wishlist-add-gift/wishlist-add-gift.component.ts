import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-wishlist-add-gift',
  templateUrl: './wishlist-add-gift.component.html',
  styleUrls: ['./wishlist-add-gift.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Поле обязательно для заполнения',
        maxlength: 'Максимальная длина - 60 символов',
      },
    },
  ],
})
export class WishlistAddGiftComponent implements OnInit, AfterContentChecked {
  @Input() currentFestId: string | null = null;
  @Input() currentFestTitle: string | null = null;
  @Input() gift: WishlistGift | null = null;
  @Input() mode: 'add' | 'edit' = 'add';
  @Output() addGift = new EventEmitter<WishlistGift>();
  @Output() editGift = new EventEmitter<WishlistGift>();

  previousFestId = '';
  isFormExpanded = false;
  buttonText: 'Добавить подарок' | 'Редактировать' | 'Свернуть' =
    'Добавить подарок';
  buttonIcon: 'tuiIconPlusLarge' | 'tuiIconMinusLarge' | 'tuiIconEditLarge' =
    'tuiIconPlusLarge';
  submitButtonText: 'Добавить' | 'Сохранить' = 'Добавить';
  currentDate: TuiDay = TuiDay.currentLocal();

  ngOnInit() {
    this.setButtonText(this.mode);

    if (this.mode === 'edit') {
      const parsedDate = TuiDay.parseRawDateString(
        this.gift?.giftDeadline || '',
        'YMD',
      );

      this.form.patchValue({
        titleInput: this.gift?.giftTitle,
        deadlineInput: TuiDay.normalizeOf(
          parsedDate.year,
          parsedDate.month,
          parsedDate.day,
        ),
        commentInput: this.gift?.giftComment,
        linkInput: this.gift?.giftLink,
      });
    }
  }

  ngAfterContentChecked() {
    if (
      this.previousFestId !== this.currentFestId &&
      this.mode === 'add'
    ) {
      this.collapseForm();
      this.form.reset({
        deadlineInput: this.currentDate,
      });
      this.previousFestId = this.currentFestId || '';
    }
  }

  toggleFormView(): void {
    if (this.isFormExpanded) {
      this.collapseForm();
    } else {
      this.expandForm();
    }
  }

  expandForm(): void {
    this.isFormExpanded = true;
    this.buttonText = 'Свернуть';
    this.buttonIcon = 'tuiIconMinusLarge';
  }

  collapseForm(): void {
    this.isFormExpanded = false;
    if (this.mode === 'add') {
      this.buttonText = 'Добавить подарок';
      this.buttonIcon = 'tuiIconPlusLarge';
    } else {
      this.buttonText = 'Редактировать';
      this.buttonIcon = 'tuiIconEditLarge';
    }
  }

  setButtonText(mode: 'add' | 'edit'): void {
    switch (mode) {
      case 'add':
        this.buttonIcon = 'tuiIconPlusLarge';
        this.buttonText = 'Добавить подарок';
        this.submitButtonText = 'Добавить';
        break;
      case 'edit':
        this.buttonIcon = 'tuiIconEditLarge';
        this.buttonText = 'Редактировать';
        this.submitButtonText = 'Сохранить';
    }
  }

  form = new FormGroup({
    titleInput: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
    ]),
    deadlineInput: new FormControl(this.currentDate, Validators.required),
    commentInput: new FormControl('', Validators.maxLength(60)),
    linkInput: new FormControl(''),
  });

  deadlineInput = this.form.get('deadlineInput');
  submit(): void {
    if (this.form.valid) {
      if (this.mode === 'add') {
        this.addGift.emit({
          giftId: String(Math.random()),
          giftTitle: this.form.get('titleInput')?.value || '',
          giftDeadline: (this.deadlineInput && this.deadlineInput.value) 
  ? this.deadlineInput.value.toUtcNativeDate().toISOString().split('T')[0] 
  : '',
          giftComment: this.form.get('commentInput')?.value || '',
          giftLink: this.form.get('linkInput')?.value || '',
          isDone: false,
          isStarred: false,
          parentFestTitle: this.currentFestTitle || '',
          parentFestId: this.currentFestId || '',
        });

        this.form.reset({
          deadlineInput: this.currentDate,
        });
      } else if (this.mode === 'edit') {
        this.editGift.emit({
          giftId: this.gift?.giftId || '',
          giftTitle: this.form.get('titleInput')?.value || '',
          giftDeadline: (this.deadlineInput && this.deadlineInput.value) 
          ? this.deadlineInput.value.toUtcNativeDate().toISOString().split('T')[0] 
          : '',
          giftComment: this.form.get('commentInput')?.value || '',
          giftLink: this.form.get('linkInput')?.value || '',
          isDone: this.gift?.isDone || false,
          isStarred: this.gift?.isStarred || false,
          parentFestTitle: this.gift?.parentFestTitle || '',
          parentFestId: this.gift?.parentFestId || '',
        });
      }

      this.collapseForm();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
