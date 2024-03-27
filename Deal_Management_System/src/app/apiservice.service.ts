import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'http://localhost:5119/api/';
  readonly photoUrl = 'http://localhost:5119/Photos/';

  constructor(private http: HttpClient) { }

  //Deal
  getdealList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'deal/GetDeal');
  }

  addDeal(deal: any): Observable<any> {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.post<any>(this.apiUrl + 'deal/AddDeal', deal, httpOptions);
  }

  updateDeal(deal: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'deal/UpdateDeal/', deal, httpOptions);
  }

  deleteDeal(dealId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'deal/DeleteDeal/' + dealId, httpOptions);
  }

  //Hotel
  getHotelList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'hotel/GetHotel');
  }

  addHotel(htl: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'hotel/AddHotel', htl, httpOptions);
  }

  updateHotel(htl: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'hotel/UpdateHotel/', htl, httpOptions);
  }

  deleteHotel(htlId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'hotel/DeleteHotel/' + htlId, httpOptions);
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'hotel/savefile', photo);
  }

  getAllDealNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'hotel/GetAllDealNames');
  }

}
