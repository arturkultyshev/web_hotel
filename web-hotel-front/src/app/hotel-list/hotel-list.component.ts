import { Component } from '@angular/core';
import { Hotel, hotels } from '../hotel';
import { HotelService } from '../hotel.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarsService } from '../stars.service';

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
    public starsService: StarsService
  ){}

  ngOnInit(): void {
    this.getHotels()
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels
    })
  }
}
