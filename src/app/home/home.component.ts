import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }
  http = inject(HttpClient)
  registermode = false;
  Users:any;
  registerToggle(){
    this.registermode = !this.registermode
  }

  cancelRegisterMode(event : boolean){
    this.registermode = event;
  }
  
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next : response => this.Users = response,
      error : error => console.error(error),
      complete : () => console.log('Request has completed')
      
    })
  }
}
