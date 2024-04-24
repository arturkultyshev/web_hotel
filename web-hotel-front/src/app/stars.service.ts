import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarsService {
  calculateStars(rating: number): number[] {
    if (typeof rating !== 'number' || isNaN(rating) || rating < 0 || rating > 5) {
      return [];
    }
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const starsArray = Array(fullStars).fill(1);
    if (halfStar === 1) {
      starsArray.push(0.5);
  }
    return starsArray.concat(Array(emptyStars).fill(0));
  }
}
