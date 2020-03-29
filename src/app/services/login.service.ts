import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'

    })
  };

  constructor(private clienteHttp: HttpClient ) {

   }

  loging(usuario: User): Observable<User>{
    const url : string = 'http://localhost:8080/logging';
    return this.clienteHttp.post<User>(url,JSON.stringify(usuario),this.httpOptions);
  }
}
