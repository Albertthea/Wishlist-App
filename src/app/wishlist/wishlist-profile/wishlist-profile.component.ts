import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
@Component({
  selector: 'app-wishlist-profile',
  templateUrl: './wishlist-profile.component.html',
  styleUrls: ['./wishlist-profile.component.less'],
})
export class WishlistProfileComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.init();
  }
}
