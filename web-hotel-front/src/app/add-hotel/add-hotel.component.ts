import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,  Validators, FormBuilder, FormGroup, } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent {
   hotelForm: FormGroup;
   hotel: Hotel = {} as Hotel;
   constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private router: Router) {
    this.hotelForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      capacity: [0, Validators.required],
      cost: [0, Validators.required],
      photo_url: ['', Validators.required],
      addition_info: ['', Validators.required],
    })
   }

   onSubmit(): void {
    if (this.hotelForm.valid) {
      const formData = this.hotelForm.value;
      console.log(formData);
      this.hotelService.createHotel(formData)
      .subscribe(() => {
        console.log('Hotel created successfully.');
        this.router.navigateByUrl('/hotels')

      }, (error) => {
        console.error('Error creating hotel:', error);
      });
    }
  }
}
