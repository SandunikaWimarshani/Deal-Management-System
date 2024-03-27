import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { DealComponent } from './deal/deal.component';


const routes: Routes = [
  {
    path: 'hotel', component: HotelComponent
  },

  {
    path: 'deal', component: DealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
