import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NumericRule } from 'devextreme/ui/validation_rules';
import { Customer } from 'src/app/Shered/customer';
import { CustomerService } from 'src/app/Shered/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(public service: CustomerService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getAllData().subscribe((res) => {
      this.service.list = res;
    });
  }

  EditForm(Id:number){
     this.service.getDataById(Id).subscribe(res => {
       this.service.FormData = res as Customer;
     });
  }

  deleteForm(Id:number){
     this.service.deleteRecord(Id).subscribe(res => {
         console.log("Record deleted!!");
         this.service.refreshList();   
    })
  }
}
