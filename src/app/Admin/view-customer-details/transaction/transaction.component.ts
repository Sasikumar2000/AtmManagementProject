import { Component, OnInit } from '@angular/core';
import { Itransaction } from 'src/app/Models/itransaction';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //
  //GetTransaction(accountNumber:number);
  accountNumber: number = 947386752125554;
  transaction : Itransaction[] = [];

  constructor(private transactionServices: CustomerService) 
  {
    transactionServices.GetTransaction(this.accountNumber).subscribe((c) => { this.transaction = c;});
   }

  ngOnInit(): void {
  }

}
