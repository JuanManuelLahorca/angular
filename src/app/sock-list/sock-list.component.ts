import { Component, OnInit } from '@angular/core';
import { SockCartService } from '../sock-cart.service';
import { SockDataService } from '../sock-data.service';
import { Sock } from './Sock';

@Component({
  selector: 'app-sock-list',
  templateUrl: './sock-list.component.html',
  styleUrls: ['./sock-list.component.scss']
})
export class SockListComponent implements OnInit {

  socks : Sock [] = [];


  constructor(
    private cart : SockCartService,
    private socksDataService: SockDataService) {
   }

  ngOnInit(): void {
    this.socksDataService.getAll()
    .subscribe(socks => this.socks = socks)
  }

  addToCart(sock: Sock) : void {
    this.cart.addToCart(sock);
    sock.stock -= sock.quantity;
    sock.quantity = 0;
  }


  maxReached(m: string){
    alert(m);
  }


}
