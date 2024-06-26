import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-add-edit-deal',
  templateUrl: './add-edit-deal.component.html',
  styleUrls: ['./add-edit-deal.component.css']
})
export class AddEditDealComponent implements OnInit {
HotelList: any;

  constructor(private service: ApiserviceService) { }

  @Input() deal: any;
  DealId = "";
  DealName = "";
  Hotel = "";
  Price = "";
  Description = ""

  ngOnInit(): void {

    this.DealId = this.deal.DealId;
    this.DealName = this.deal.DealName;
    this.Hotel = this.Hotel;
    this.Price = this.deal.Price;
    this.Description = this. deal.Description
  }

  addDeal() {
    var deal = {
      DealId: this.DealId,
      DealName: this.DealName,
      Hotel: this.Hotel,
      Price : this.deal.Price,
      Description : this. deal.Description

    };
    this.service.addDeal(deal).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDeal() {
    var deal = {
      DealId: this.DealId,
      DealName: this.DealName,
      Hotel: this.Hotel,
      Price : this.deal.Price,
      Description : this. deal.Description
    };
    
    this.service.updateDeal(deal).subscribe(res => {
      alert(res.toString());
    });
  }
}