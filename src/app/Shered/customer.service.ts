import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  //this form data is a variable of type Customer it hold all the customer data customerId etc

  constructor(private http: HttpClient) {}

  FormData: Customer = new Customer();
  list:Customer[];

  getAllData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.ApiUrl + 'Customer');
  }

   getDataById(id:number){
      return this.http.get<Customer>(environment.ApiUrl + 'Customer/' + id);
   }

  postCustomerDetails() {
    return this.http.post(environment.ApiUrl + 'Customer', this.FormData);
  }

  updateCustomer(id:number){
    return this.http.put(environment.ApiUrl + 'Customer/' + id ,this.FormData);
  }

  deleteRecord(id:number){
    return this.http.delete(environment.ApiUrl + 'Customer/' + id);
  }

  async refreshList() {
    await this.http.get(environment.ApiUrl+'Customer')
      .toPromise()
      .then(res =>this.list = res as Customer[]);
  }
}
