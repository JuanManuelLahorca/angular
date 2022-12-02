import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Sock } from './sock-list/Sock';

const URL = 'https://63889a49a4bb27a7f78c2ff3.mockapi.io/socks';

@Injectable({
  providedIn: 'root'
})
export class SockDataService {

  constructor(private http: HttpClient ) { }

  public getAll() : Observable<Sock[]>{

    return this.http.get<Sock[]>(URL)
              .pipe(
                tap((socks: Sock[])=> socks.forEach(sock =>sock.quantity = 0))
              );
  }
}
