import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { MateriaModule } from '../materia/materia.module';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientesComponent, MainComponent, DetalleClienteComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MateriaModule,
    FormsModule
  ]
})
export class MainModule { }
