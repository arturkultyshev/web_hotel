import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId: string = '';
  isAdmin: boolean = false;
  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>('http://localhost:8000/login/', credentials).pipe(
      map((resp: any) => {
        if (resp && resp.access) {
          localStorage.setItem('token', resp.access);
          const decodedToken = jwtDecode(resp.access);
          const userId = (decodedToken as any).user_id;
          console.log(decodedToken);
          // this.userId = userId;

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
    return !!localStorage.getItem('token')
  }

  // getUser(): User | undefined {
  //   return this.user
  // }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  logout(): void {
    localStorage.removeItem('token')
    // this.user = undefined
  }



}
