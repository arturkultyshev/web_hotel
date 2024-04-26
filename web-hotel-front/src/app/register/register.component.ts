import { Component, DoCheck } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../auth.service";
import {Login} from "../login/login.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements DoCheck{
  register: Register;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.register = new Register()
  }
  ngDoCheck() {
    if (this.authService.isLogged()) {
      this.router.navigateByUrl('/orders')
    }
  }
  onRegister() {
    this.authService.register({
      firstname: this.register.Firstname,
      lastname: this.register.Lastname,
      username: this.register.Username,
      email: this.register.Email,
      password: this.register.Password
    }).subscribe((res: any) => {
      if (res) {
        console.log('Registration successful:', res);
        this.router.navigateByUrl('/login');
      } else {
        console.log('Registration failed.');
      }
    });
  }
  
}

export class Register {
  Firstname: string;
  Lastname: string;
  Username: string;
  Email: string;
  Password: string;
  constructor() {
    this.Firstname = "";
    this.Lastname = "";
    this.Username = "";
    this.Email = ""
    this.Password = "";
  }
}
