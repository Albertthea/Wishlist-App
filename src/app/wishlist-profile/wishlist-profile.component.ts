import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wishlist-profile',
  templateUrl: './wishlist-profile.component.html',
  styleUrls: ['./wishlist-profile.component.less'],
})
export class WishlistProfileComponent implements OnInit {
  userData: any = { email: 'example@example.com' };
  constructor() {}

  ngOnInit(): void {}

  signOut(): void {}
}
