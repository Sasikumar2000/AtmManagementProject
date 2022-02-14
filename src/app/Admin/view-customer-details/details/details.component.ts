import { Component, OnInit } from '@angular/core';
import { Icustomer } from 'src/app/Models/icustomer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  cus: Icustomer = {} as Icustomer;

  txtaccholder:string="";
  txtaddress:string="";
  txtcity:string="";
  txtEmail:string="";
  txtContact:number=0;
  txtNumber:number=0;
  txtPinNumber:number=0;
  txtAccountNumber:number=0;
  txtBalance:number=0;

  
  
  ngOnInit(): void {
  }

}
