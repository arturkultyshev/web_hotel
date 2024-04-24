import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8000/hotels'
  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl)
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}${id}`)
  }

  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  updateHotel(hotel: Hotel): Observable<Hotel>{
    return this.http.put<Hotel>(`${this.apiUrl}${hotel.id}`, hotel);
  }

  deleteHotel(id: number): Observable<Hotel> {
    return this.http.delete<Hotel>(`${this.apiUrl}${id}`)
  }
}
