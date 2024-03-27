import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.css']
})
export class AddEditHotelComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input() htl: any;
  HotelId = "";
  HotelName = "";
  Address = "";
  ContactNo = "";
  Rating = "";
  PhotoFileName = "";
  PhotoFilePath = "";
  DealList: any = [];


  ngOnInit(): void {
    this.loadHotelList();
  }

  loadHotelList() {

    this.service.getAllDealNames().subscribe((data: any) => {
      this.DealList = data;

      this.HotelId = this.htl.HotelId;
      this.HotelName = this.htl.HotelName;
      this.Address = this.htl.Address;
      this.ContactNo = this.htl.ContactNo;
      this.Rating = this.htl.Rating;
      this.PhotoFileName = this.htl.PhotoFileName;
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }

  addHotel() {
    var val = {
      HotelId: this.HotelId,
      HotelName: this.HotelName,
      Address: this.Address,
      ContactNo: this.ContactNo,
      Rating: this.Rating,
      PhotoFileName: this.PhotoFileName
    };

    this.service.addHotel(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateHotel() {
    var val = {
      HotelId: this.HotelId,
      HotelName: this.HotelName,
      Address: this.Address,
      ContactNo: this.ContactNo,
      Rating: this.Rating,
      PhotoFileName: this.PhotoFileName
    };

    this.service.updateHotel(val).subscribe(res => {
      alert(res.toString());
    });
  }


  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    })
  }
}