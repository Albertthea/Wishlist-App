import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistProfileComponent } from './wishlist/wishlist-profile/wishlist-profile.component';
import { WishlistNotFoundComponent } from './wishlist/wishlist-not-found/wishlist-not-found.component';
import { WishlistSignInComponent } from './wishlist/wishlist-sign-in/wishlist-sign-in.component';
import { WishlistMainComponent } from './wishlist/wishlist-main/wishlist-main.component';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { WishlistMainComponent2 } from './wishlist/wishlist-main 2/wishlist-main2.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: WishlistMainComponent, canActivate: [AuthGuard] },
  { path: 'main2', component: WishlistMainComponent2},
    { path: 'sign-in', component: WishlistSignInComponent },
    {
      path: 'profile',
      component: WishlistProfileComponent,
      canActivate: [AuthGuard],
    },
    { path: '**', component: WishlistNotFoundComponent },
  ];; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
