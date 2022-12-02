import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SockCartService } from '../sock-cart.service';
import { Sock } from '../sock-list/Sock';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.scss']
})
export class CartShoppingComponent implements OnInit {

  cartList$ : Observable<Sock[]>;
  constructor(private cart : SockCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
