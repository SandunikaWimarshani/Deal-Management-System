import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealComponent } from './deal/deal.component';
import { AddEditDealComponent } from './deal/add-edit-deal/add-edit-deal.component';
import { ShowDealComponent } from './deal/show-deal/show-deal.component';
import { HotelComponent } from './hotel/hotel.component';
import { AddEditHotelComponent } from './hotel/add-edit-hotel/add-edit-hotel.component';
import { ShowHotelComponent } from './hotel/show-hotel/show-hotel.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DealComponent,
    AddEditDealComponent,
    ShowDealComponent,
    HotelComponent,
    AddEditHotelComponent,
    ShowHotelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
