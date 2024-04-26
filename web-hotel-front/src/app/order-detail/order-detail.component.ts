import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Order } from '../order';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  @Output() getOrders: EventEmitter<void> = new EventEmitter<void>();
  @Input() order: Order | undefined;
  hotel: Hotel | undefined;
  authService: any;
  
  constructor(private hotelService: HotelService, private userService: UserService){}

  ngOnInit(): void {
    const hotelId = this.order?.hotel
    if(hotelId){
    this.hotelService.getHotel(hotelId).subscribe(hotel => this.hotel = hotel)
    }
  }

  delete(orderId: number | undefined) {
    if(orderId){
      this.userService.deleteOrder(orderId).subscribe({
        next: () => {
          console.log('Order deleted successfully!');
          this.getOrders.emit();
        },
        error: (err) => {
          console.error('Failed to delete order:', err);
        }
      });
  }
}

  edit(orderId: number | undefined) {
    if (orderId) {
      const newDate = new Date();
      const cntDates = Number(window.prompt('Введите НОВОЕ количество дней букинга:'));
      const additionalInfo = String(window.prompt('Введите НОВУЮ дополнительную информацию:'));
      if (this.order?.start_date !== undefined) {
        newDate.setDate(newDate.getDate() + cntDates);
        const orderData = {
            orderId: this.order?.id as number,
            user: this.order?.user as number,
            hotel: this.order?.hotel as number,
            start_date: this.order.start_date, // Убедитесь, что start_date определен
            end_date: newDate.toISOString().split('T')[0],
            created_at: new Date().toISOString().split('T')[0],
            additional_info: additionalInfo
        }
        
        this.userService.updateOrder(orderData).subscribe(() => {
            console.log('Order updated successfully.');
            this.getOrders.emit()
        }, (error) => {
            console.error('Error updating order:', error);
        });
    } else {
        console.error('Error: start_date is undefined.');
    }
}
  }}
