import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sock } from './sock-list/Sock';

@Injectable({
  providedIn: 'root'
})
export class SockCartService {

  private _cartList : Sock [] = [];

  cartList : BehaviorSubject<Sock[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(sock : Sock){
    let item = this._cartList.find((v1) => v1.style == sock.style);
    if(!item){
      this._cartList.push({... sock});
    }
    else{
      item.quantity += sock.quantity;
    }
    this.cartList.next(this._cartList); // equivalente al emitt de eventos
  }

}
