import { Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path: '**', 
        redirectTo: '/404',
        pathMatch: 'full'
    }
];
