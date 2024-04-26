import { Component } from '@angular/core';
import { Hotel, hotels } from '../hotel';
import { HotelService } from '../hotel.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarsService } from '../stars.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {
  // hotels = hotels
  hotels: Hotel[] | undefined

  constructor(
    private hotelService: HotelService,
    public starsService: StarsService,
    public authService: AuthService
  ){}

  ngOnInit(): void {
    this.getHotels()
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels
    })
  }

  deleteHotel(hotelId: number) {
    if (hotelId) {
      this.hotelService.deleteHotel(hotelId).subscribe({
        next: () => {
          console.log('Hotel deleted successfully!');
          this.hotelService.getHotels().subscribe(hotels => {
            this.hotels = hotels
          })
        },
        error: (err) => {
          console.error('Failed to delete hotel:', err);
        }
      });
    } else {
      console.error('Hotel id is undefined or null.');
    }
    }
}
