import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | undefined;
  constructor(private http: HttpClient) { }

  login(credentials: {username: string, password: string}): Observable<boolean> {
    return this.http.post<any>('http://localhost:8000/login', credentials).pipe(
      map((resp: any) => {
        if (resp & resp.token) {
          localStorage.setItem('token', resp.token)
          this.user = resp.user
          return true;
        } else {
          return false;
        }
      })
    );
  }

  isLogged(): boolean {
    return !!this.user && !!localStorage.getItem('token')
  }

  getUser(): User | undefined {
    return this.user
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  logout(): void {
    localStorage.removeItem('token')
    this.user = undefined
  }



}
