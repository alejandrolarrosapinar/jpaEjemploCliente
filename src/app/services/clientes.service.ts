import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'

    })
  };

  constructor(private clienteHttp: HttpClient) { }

  obtenerClientes():Observable<any> {
    const url : string = 'http://localhost:8080/obtenerClientes';
    return this.clienteHttp.get(url,this.httpOptions);
  }

  guardarCliente(cliente: Cliente): Observable<any>{
    const url : string = 'http://localhost:8080/actualizarCliente';
    return this.clienteHttp.post<Cliente>(url,cliente,this.httpOptions);
  }
}