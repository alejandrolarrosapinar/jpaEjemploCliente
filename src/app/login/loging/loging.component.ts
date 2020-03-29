import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  user: User;

  constructor(private servicio: LoginService,private router:Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.servicio.loging(this.user).subscribe(data=>{
      this.user = data;
      if(this.user!=null){
        this.router.navigate(['/index']);
      }
      
    },error=>{
      alert('Se ha producido un error');
    });
  }

}
