import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Icustomer } from 'src/app/Models/icustomer';
import { DetailsComponent } from './details/details.component';


import { CustomerService } from 'src/app/Services/customer.service';
import { TransactionComponent } from './transaction/transaction.component';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent implements OnInit {
  //category: Icategory = {} as Icategory;
  cus: Icustomer = {} as Icustomer;
   customers:Icustomer[] = [];
  
  
  constructor(private customerServices: CustomerService,private dialogRef:MatDialog) 
  { 
   
   console.log(this.cus);
    customerServices.GetCustomerDetails().subscribe((c) => { this.customers = c;});
    console.log(this.cus.name);
    
  }
  
 
 



  openView(){
    this.dialogRef.open(DetailsComponent);
  }
  openTransaction(){
    this.dialogRef.open(TransactionComponent);
  }
  ngOnInit(): void {
  }

}
