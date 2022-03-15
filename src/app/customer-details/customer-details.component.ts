import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Shered/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  constructor(public service:CustomerService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
}
