import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/model/cliente';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido1', 'apellido2', 'dni','fechaNacimiento'];
  clientes: any;

  constructor(private servicio: ClientesService, private router: Router) { }

  ngOnInit() {
    this.servicio.obtenerClientes().subscribe(result=>{
      this.clientes = new MatTableDataSource(result);
      
      



    },error=>{
      alert(error);
    });
  }

  accederCliente(row: any){
    localStorage.setItem('detalleCliente',JSON.stringify(row));
    this.router.navigate(['/index/detalleCliente']);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientes.filter = filterValue.trim().toLowerCase();
  }

}
