import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-profile-bar',
  templateUrl: './wishlist-profile-bar.component.html',
  styleUrls: ['./wishlist-profile-bar.component.less']
})
export class WishlistProfileBarComponent {
  @Input() userEmail!: string;
}

