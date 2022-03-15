import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/Shered/customer';
import { CustomerService } from 'src/app/Shered/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  constructor(public service: CustomerService, private toastr: ToastrService) {}

  ngOnInit(): void {
  
  }

  OnSubmit(form: NgForm) {
    if(this.service.FormData.customerId == 0)
    {
      this.service.postCustomerDetails().subscribe(
        (res) => {
          this.ResetForm(form);
          this.service.refreshList();
          this.toastr.success('Submitted Successfully', 'Customer Details added');
        },
        (err) => {
          console.log(err);
          this.toastr.error('Error', 'Sorry problem occurs while Saving');
        }
      );
    }else{
      this.service.updateCustomer(this.service.FormData.customerId).subscribe(res => {
        this.service.refreshList();
        this.ResetForm(form);
      });
    }
    
  }

  ResetForm(form: NgForm) {
    form.form.reset();
    this.service.FormData = new Customer();
 
  }

 
 
}
