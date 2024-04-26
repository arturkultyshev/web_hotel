import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId: number = -1;
  admin: boolean = false;
  router: any;
  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>('http://localhost:8000/login/', credentials).pipe(
      map((resp: any) => {
        if (resp && resp.access) {
          localStorage.setItem('token', resp.access);
          const decodedToken = jwtDecode(resp.access);
          const userId = (decodedToken as any).user_id;
          const isAdmin = (decodedToken as any).is_stuff;
          console.log(decodedToken);
          this.userId = userId;
          this.admin = isAdmin
          return true;
        } else {
          return false;
        }
      })
    );
  }

  register(credentials: {firstname: string, lastname: string, username: string, email: string, password: string}): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/register/', credentials)
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token') && this.userId != -1
  }

  isAdmin(): boolean {
    return this.admin;
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }
  
  isAutoLogin() : boolean {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    if (login !== null && password !== null) {
      return true;
    } 
    return false;
  }

  autoLogin(): void { 
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    if (login !== null && password !== null) {
      this.login({username: login, password: password}).subscribe((res:any) =>{
        if(res) {
          console.log("autoLogin")
        }
      })
  }
  }

  logout(): void {
    localStorage.removeItem('login')
    localStorage.removeItem('password')
    localStorage.removeItem('token')
    this.userId = -1;
    this.admin = false;
  }



}
