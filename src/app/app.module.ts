import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SockListComponent } from './sock-list/sock-list.component';
import { FormsModule } from "@angular/forms";
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { SoketeAboutComponent } from './sokete-about/sokete-about.component';
import { SoketeSocksComponent } from './sokete-socks/sokete-socks.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    SockListComponent,
    CartShoppingComponent,
    SoketeAboutComponent,
    SoketeSocksComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
