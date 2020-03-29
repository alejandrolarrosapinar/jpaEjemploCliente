import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogingComponent } from './loging/loging.component';
import { MateriaModule } from '../materia/materia.module';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { MainModule } from '../main/main.module';




@NgModule({
  declarations: [LogingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainModule,
    MateriaModule
  ]
})
export class LoginModule { }
