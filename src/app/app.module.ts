import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WishlistModule } from './wishlist/wishlist.module';
import { TuiInputModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    WishlistModule,
    FormsModule,
    ReactiveFormsModule,
    WishlistModule,
    TuiInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
