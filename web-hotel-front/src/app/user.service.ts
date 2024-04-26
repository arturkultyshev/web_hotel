import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "./order";
import { Hotel } from './hotel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/'
  constructor(private http: HttpClient, private authService: AuthService) { }

  // getUser(userId: number): Observable<User> {
  //
  getOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}orders/user/${userId}`);
  }

  createOrder(order: {user: number, hotel: number, start_date: string, end_date: string, created_at: string, additional_info: string}): Observable<Order> {
    console.log(order)
    return this.http.post<Order>(`${this.apiUrl}orders/`, order);
  }

  deleteOrder(orderId: number): Observable<Order> {
    return this.http.delete<Order>(`${this.apiUrl}orders/${orderId}/`);
  }
  updateOrder(order: {orderId: number, user: number, hotel: number, start_date: string, end_date: string, created_at: string, additional_info: string}): Observable<Order>{
    return this.http.put<Order>(`${this.apiUrl}orders/${order.orderId}/`, order);;
  }
}
