import { Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { authGuard } from './auth.guard';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { AddHotelComponent} from './add-hotel/add-hotel.component';
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'hotels',
        component: HotelListComponent
    },
    {
        path: 'hotels/:id',
        component: HotelDetailsComponent
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [authGuard]
    },
    {
        path: 'edit-hotel/:id',
        component: EditHotelComponent
    },
    {
        path: 'add-hotel',
        component: AddHotelComponent
    },
    {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full'
    }
];
