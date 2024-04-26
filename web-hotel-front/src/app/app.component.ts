import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'web-hotel-front';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (!this.authService.isLogged() && this.authService.isAutoLogin()) {
      this.authService.autoLogin()
    }
  }
}
