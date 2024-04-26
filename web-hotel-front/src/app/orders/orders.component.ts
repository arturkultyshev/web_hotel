import { Component } from '@angular/core';
import { Order } from '../order';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule, CommonModule, OrderDetailComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Order[] | undefined

  constructor(
    private userService: UserService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(): void {
    this.userService.getOrders(this.authService.userId).subscribe(orders => {
      this.orders = orders;
    })
  }

  onDeleteOrder(orderId: number) {
    this.userService.deleteOrder(orderId).subscribe({
      next: () => {
        console.log('Order deleted successfully!');
        this.getOrders();
      },
      error: (err) => {
        console.error('Failed to delete order:', err);
      }
    });
  }
  
}
