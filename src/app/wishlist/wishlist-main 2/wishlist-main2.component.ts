import { Component, OnInit, Input } from '@angular/core';
import { WishlistGift } from 'src/shared/modes/WishlistGift';
import { DataService } from 'src/shared/services/gifts.service';
import { AuthService } from 'src/shared/services/auth.service';
import { FestService } from 'src/shared/services/fest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './wishlist-main2.component.html',
  styleUrls: ['./wishlist-main2.component.less'],
})
export class WishlistMainComponent2 implements OnInit {
  fest$: Observable<any> | undefined;

  constructor(
    public dataService: DataService,
    public authService: AuthService,
    public festService: FestService,
  ) {}

  ngOnInit() {
    this.authService.init();
    this.dataService.updateData();
    this.fest$ = this.festService.getFest(
      '0Jhnw9WBEabOZ4VMK6k9vmWelcy1',
      'new_year',
    );
  }

  editGift(gift: WishlistGift): void {
    this.festService.editGift(gift);
  }
}
