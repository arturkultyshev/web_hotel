import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/'
  constructor(http: HttpClient) { }

  // getUser(userId: number): Observable<User> {
  //
  // getOrders(userId: number): Observable<Order[]> {
  //   return this.http.get<Order[]>(this.apiUrl)
  // }

}
