import { Component, OnInit } from '@angular/core';
import { Icustomer } from 'src/app/Models/icustomer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent implements OnInit {
  //category: Icategory = {} as Icategory;
 // cus: Icustomer = {} as Icustomer;
  customers:Icustomer[] = [];
  
  constructor(private customerServices: CustomerService) 
  { 
   
    customerServices.GetCustomerDetails().subscribe((c) => { this.customers = c;});
    
  }
  
  

  ngOnInit(): void {
  }

}
