import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-show-hotel',
  templateUrl: './show-hotel.component.html',
  styleUrls: ['./show-hotel.component.css']
})
export class ShowHotelComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  HotelList: any = [];
  ModalTitle = "";
  ActivateAddEditHotelComp: boolean = false;
  htl: any;

  ngOnInit(): void {
    this.refreshHotelList();
  }

  addClick() {
    this.htl = {
      HotelId: "0",
      HotelName: "",
      Address: "",
      ContactNo: "",
      Rating: "",
      PhotoFileName: "anonymous.png"
    }
    this.ModalTitle = "Add Hotel";
    this.ActivateAddEditHotelComp = true;
  }

  editClick(item: any) {
    this.htl = item;
    this.ModalTitle = "Edit Hotel";
    this.ActivateAddEditHotelComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteHotel(item.HotelId).subscribe(data => {
        alert(data.toString());
        this.refreshHotelList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditHotelComp = false;
    this.refreshHotelList();
  }

  refreshHotelList() {
    this.service.getHotelList().subscribe(data => {
      this.HotelList = data;
    });
  }
}