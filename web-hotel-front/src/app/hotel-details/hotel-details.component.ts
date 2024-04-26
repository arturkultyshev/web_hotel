import { Component } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel, hotels } from '../hotel';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarsService } from '../stars.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Review } from '../review';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent {
  review: Review = {} as Review;
  hotel: Hotel | undefined;
  reviews: Review[] | undefined;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    public starsService: StarsService,
    private router: Router,
    private userService: UserService,
    public authService: AuthService
  ){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const hotelId = Number(routeParams.get('id'))
    this.hotelService.getHotel(hotelId).subscribe(hotel => this.hotel = hotel)
    this.hotelService.getReviews(hotelId).subscribe((reviews: Review[]) => {
    this.reviews = reviews;
  });
  }

  deleteHotel() {
  if (this.hotel && this.hotel.id !== undefined) {
    this.hotelService.deleteHotel(this.hotel.id).subscribe({
      next: () => {
        console.log('Hotel deleted successfully!');
        this.router.navigateByUrl('/hotels');
      },
      error: (err) => {
        console.error('Failed to delete hotel:', err);
      }
    });
  } else {
    console.error('Hotel id is undefined or null.');
  }
  }

  bookHotel(): void{
    if (!this.authService.isLogged()) {
      this.router.navigateByUrl('/login')
      return
    }
    const start_date = new Date();
    const end_date = new Date(start_date);
    const cntDates = Number(window.prompt('Введите количество дней букинга:'));
    const additionalInfo = String(window.prompt('Введите дополнительную информацию:'));
    if (additionalInfo !== null && cntDates != null && this.hotel !== undefined) {
      end_date.setDate(end_date.getDate() + cntDates);
      const orderData = {
        user: this.authService.userId,
        hotel: this.hotel.id,
        start_date: start_date.toISOString().split('T')[0],
        end_date: end_date.toISOString().split('T')[0],
        created_at: start_date.toISOString().split('T')[0],
        additional_info: additionalInfo
      }
      this.userService.createOrder(orderData).subscribe(() => {
        console.log('Order created successfully.');
        this.router.navigateByUrl('/orders')

      }, (error) => {
        console.error('Error creating hotel:', error);
      });
    }
  }

  canDelete(userId: number): boolean {
    if (this.authService.admin) {
      return true
    } else if (this.authService.isLogged() && userId == this.authService.userId) {
      return true;
    }
    return false;
  }
  deleteReview(reviewId: number | undefined): void {
    const hotelId = this.hotel?.id ?? undefined;
    if (hotelId !== undefined && reviewId !== undefined) {
        this.hotelService.deleteReview(hotelId, reviewId).subscribe({
            next: () => {
                console.log('Review deleted successfully!');
                this.hotelService.getHotel(hotelId).subscribe(hotel => this.hotel = hotel)
                this.hotelService.getReviews(hotelId).subscribe((reviews: Review[]) => {
                    this.reviews = reviews;
                });
                this.hotelService.getHotel(hotelId).subscribe(hotel => this.hotel = hotel)
            },
            error: (err) => {
                console.error('Failed to delete review:', err);
            }
        });
    } else {
        console.error('Hotel is undefined or null.');
    }
}



  submitReview(): void {
    const publication_date = new Date();
    const userId = this.authService.userId;
    if (this.hotel && this.review.comment && this.review.rating) {
      const reviewData = {
        rating: this.review.rating,
        publication_date: publication_date.toISOString().split('T')[0],
        comment: this.review.comment,
        user: userId,
        hotel: this.hotel.id
      }
      this.hotelService.createReview(reviewData).subscribe(() => {
        console.log('Review created successfully.');
        this.review.comment = ''
        this.review.rating = 0
        this.hotelService.getReviews(reviewData.hotel).subscribe((reviews: Review[]) => {
          this.reviews = reviews;
        });
        this.hotelService.getHotel(reviewData.hotel).subscribe(hotel => this.hotel = hotel)
          
      }, (error) => {
        console.error('Error creating review:', error);
      });
    } else {
      console.error('Hotel is not defined or review is incomplete');
    }
  }
}


