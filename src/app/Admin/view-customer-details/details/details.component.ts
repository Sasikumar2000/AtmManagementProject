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
  
   
  txtaccholder:any=this.customers.name;
  txtaddress:any=this.customers.address;
  txtcity:any=this.customers.city;
  txtEmail:any=this.customers.email;
  txtContact:any=this.customers.contact;
  txtNumber:any=this.customers.cardNumber;
  txtPinNumber:any=this.customers.pinNumber;
  txtAccountNumber:any=this.customers.accountNumber;
  txtBalance:any=this.customers.balance;
  
 

  test(){
    console.log(this.customers.name);
  }


  
  
  ngOnInit(): void {

  }

}
