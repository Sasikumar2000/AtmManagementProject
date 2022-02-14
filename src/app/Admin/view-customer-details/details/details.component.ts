import { TemplateLiteral } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { pairwise } from 'rxjs';
import { Icustomer } from 'src/app/Models/icustomer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Temp: any =  sessionStorage.getItem("accountNumber");

  AccountNumber:number = this.Temp;

  customers: Icustomer = {} as Icustomer;

  //customers : Icustomer[] = [];
  constructor(public customerServices: CustomerService) 
  { 
    
    customerServices.GetCustomerDetailsByAcc(this.AccountNumber).subscribe((c) => { this.customers = c;});
    
  }
 
   

  
  
  ngOnInit(): void {

  }

}
