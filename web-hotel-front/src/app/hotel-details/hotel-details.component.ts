import { Component } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel, hotels } from '../hotel';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarsService } from '../stars.service';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent {
  hotel: Hotel | undefined;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    public starsService: StarsService,
    private router: Router,
  ){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const hotelId = Number(routeParams.get('id'))
    this.hotelService.getHotel(hotelId).subscribe(hotel => this.hotel = hotel)
  }
  calculateStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const starsArray = Array(fullStars).fill(1);
    if (halfStar === 1) {
      starsArray.push(0.5);
  }
    return starsArray.concat(Array(emptyStars).fill(0));
  }

  deleteHotel() {
    if (this.hotel?.id !== undefined) {
      this.hotelService.deleteHotel(this.hotel?.id).subscribe({
        next: () => {
          // Обработка успешного удаления отеля
          console.log('Hotel deleted successfully!');
          this.router.navigateByUrl('/hotels')
        },
        error: (err) => {
          // Обработка ошибки при удалении отеля
          console.error('Failed to delete hotel:', err);
        }
      });
  }
}
}
