import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {

  cliente: Cliente;

  displayedColumns: string[] = ['id', 'fecha'];

  constructor(private servicio: ClientesService) { }

  ngOnInit() {
    this.cliente = JSON.parse((localStorage.getItem('detalleCliente')));
  }

  guardarCliente() {
    this.cliente.tpedidos.forEach(p=>{
      p.tcliente = new Cliente();
      p.tcliente.id = this.cliente.id;
    });
    this.servicio.guardarCliente(this.cliente).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
