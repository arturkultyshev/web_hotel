import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.login = new Login()
  }

  onLogin() {
    this.authService.login({username: this.login.Username, password: this.login.Password}).subscribe((res:any) =>{
      if(res.access) {
        this.router.navigateByUrl('/orders')
      }
    })
  }
}

export class Login {
  Username: string;
  Password: string;
  constructor() {
    this.Username = "";
    this.Password = "";
  }
}