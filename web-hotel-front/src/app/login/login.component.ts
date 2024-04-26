import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements DoCheck {
  rememberMe: boolean = false;
  login: Login;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.login = new Login();
  }

  ngDoCheck() {
    if (this.authService.isLogged()) {
      this.router.navigateByUrl('/orders')
    }
  }

  onLogin() {
    this.authService.login({username: this.login.Username, password: this.login.Password}).subscribe((res:any) =>{
      if(res) {
        this.router.navigateByUrl('/orders')
      }
    })
    if (this.rememberMe) {
      console.log("suda")
      localStorage.setItem('login', this.login.Username);
      localStorage.setItem('password', this.login.Password);
  }
  }

  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
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
