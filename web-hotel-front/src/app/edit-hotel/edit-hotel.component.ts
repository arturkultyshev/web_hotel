import { Component, OnInit } from '@angular/core';
import { Hotel, hotels } from '../hotel';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-edit-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-hotel.component.html',
  styleUrl: './edit-hotel.component.css'
})
export class EditHotelComponent implements OnInit {
  hotel: Hotel = {} as Hotel;
  constructor(private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(Number(id)).subscribe(
      hotel => {
        this.hotel = hotel;
      },
      error => {
        console.error('Ошибка при получении отеля:', error);
        // Обработка случая, когда отель не найден
      }
    );
  }

  onSubmit(): void {
    if (this.hotel.name && this.hotel.street && this.hotel.cost && this.hotel.capacity) {
      this.hotelService.updateHotel(this.hotel).subscribe(
        (response) => {
          console.log('Данные отеля успешно обновлены:', response);
          // Выполните здесь необходимые действия после успешного обновления
        },
        (error) => {
          console.error('Ошибка при обновлении данных отеля:', error);
          // Выполните здесь необходимые действия в случае ошибки
        }
      );
    } else {
      console.error('Ошибка: Некорректные данные для обновления');
    }
  }
}
