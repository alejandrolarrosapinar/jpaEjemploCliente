import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogingComponent } from './login/loging/loging.component';
import { ClientesComponent } from './main/clientes/clientes.component';
import { MainComponent } from './main/main/main.component';
import { DetalleClienteComponent } from './main/detalle-cliente/detalle-cliente.component';


const routes: Routes = [
  {path:'', component: LogingComponent},
  {path:'index',component: MainComponent, children:[
    {path: 'clientes', component: ClientesComponent},
    {path: 'detalleCliente', component: DetalleClienteComponent}
  ]
    
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
