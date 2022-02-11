import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer-details',
  templateUrl: './add-customer-details.component.html',
  styleUrls: ['./add-customer-details.component.css']
})
export class AddCustomerDetailsComponent implements OnInit {

  customerdetailsForm: any | FormGroup;

  // get name(){return this.customerdetailsForm.get('name')}
  // constructor() { }

  ngOnInit() {
    this.customerdetailsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, [Validators.required,Validators.minLength(20),Validators.maxLength(50)]),
      city: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9_-]{8,15}$')]),
      cardnumber:new FormControl(null,Validators.required),
      pinnumber:new FormControl(null,[Validators.required,Validators.maxLength(4)]),
      accountnumber:new FormControl(null,[Validators.required,Validators.maxLength(16)]),
      balance:new FormControl(null,Validators.required),



    })
  }


}
