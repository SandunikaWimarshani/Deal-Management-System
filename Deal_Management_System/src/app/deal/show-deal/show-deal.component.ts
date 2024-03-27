import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-show-deal',
  templateUrl: './show-deal.component.html',
  styleUrls: ['./show-deal.component.css']
})
export class ShowDealComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  DealList: any = [];
  ModalTitle = "";
  ActivateAddEditDealComp: boolean = false;
  deal: any;

  DealIdFilter = "";
  DealNameFilter = "";
  DealListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDealList();
  }

  addClick() {
    this.deal = {
      DealId: "0",
      DealName: "",
      Price: "",
      Description: ""
    }
    this.ModalTitle = "Add Deal";
    this.ActivateAddEditDealComp = true;
  }

  editClick(item: any) {
    this.deal = item;
    this.ModalTitle = "Edit Deal";
    this.ActivateAddEditDealComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteDeal(item.DealId).subscribe(data => {
        alert(data.toString());
        this.refreshDealList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditDealComp = false;
    this.refreshDealList();
  }


  refreshDealList() {
    this.service.getdealList().subscribe(data =>  {
      this.DealList = data;
      this.DealListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.DealList = this.DealListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var DealIdFilter = this.DealIdFilter;
    var DealNameFilter = this.DealNameFilter;

    this.DealList = this.DealListWithoutFilter.filter(
      function (el: any) {
        return el.DealId.toString().toLowerCase().includes(
          DealIdFilter.toString().trim().toLowerCase()
        ) &&
          el.DealName.toString().toLowerCase().includes(
            DealNameFilter.toString().trim().toLowerCase())
      }
    );
  }
}