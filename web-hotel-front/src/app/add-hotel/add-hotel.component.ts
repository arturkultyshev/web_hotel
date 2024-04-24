import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent {
   hotel: Hotel = {} as Hotel;
   constructor(private hotelService: HotelService) {}
   onSubmit(): void {
    if (this.hotel.name && this.hotel.street && this.hotel.cost && this.hotel.capacity) {
      this.hotelService.createHotel(this.hotel)
      .subscribe(() => {
        console.log('Hotel created successfully.');
      }, (error) => {
        console.error('Error creating hotel:', error);
      });
    }
  }
}
