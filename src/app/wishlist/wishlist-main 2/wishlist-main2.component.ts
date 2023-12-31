import { Component, OnInit, Input } from '@angular/core';
import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { DataService } from 'src/shared/services/gifts.service';
import { AuthService } from 'src/shared/services/auth.service';
import { FestService } from 'src/shared/services/fest.service';
import { Observable } from 'rxjs';
import { WishlistFest } from 'src/shared/modes/WishlistFest';

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './wishlist-main2.component.html',
  styleUrls: ['./wishlist-main2.component.less'],
})
export class WishlistMainComponent2 implements OnInit {
  @Input() profileIdInput!: string;
  @Input() festIdInput!: string;

  fest$: Observable<any> | undefined;
  gifts: WishlistGift[] = [];

  constructor(
    public dataService: DataService,
    public authService: AuthService,
    public festService: FestService,
  ) {}

  ngOnInit() {
    this.authService.init();
    this.dataService.updateData();
    // this.fest$ = this.festService.getFest(
    //   '0Jhnw9WBEabOZ4VMK6k9vmWelcy1',
    //   'new_year',
    // );

    if (this.profileIdInput && this.festIdInput) {
      this.fest$ = this.festService.getFest(
        this.profileIdInput,
        this.festIdInput,
      );
    }

    const savedProfileId = localStorage.getItem('profileId');
    if (savedProfileId) {
      this.profileIdInput = savedProfileId;
    }

    const savedFestId = localStorage.getItem('festId');
    if (savedFestId) {
      this.festIdInput = savedFestId;
    }
  }

  loadFest(): void {
    if (this.profileIdInput && this.festIdInput) {
      this.fest$ = this.festService.getFest(
        this.profileIdInput,
        this.festIdInput,
      );
    }
    localStorage.setItem('profileId', this.profileIdInput);
    localStorage.setItem('festId', this.festIdInput);
  }

  editGift(gift: WishlistGift): void {
    this.festService.editGift(gift);
  }
}
