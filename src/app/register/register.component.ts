import { Component, OnInit } from '@angular/core';
import { IAdminLongin } from '../Models/iadmin-longin';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  txtuserName:string="";
  txtpassWord:string="";

  ngOnInit(): void {
  }
  login:IAdminLongin = {}  as IAdminLongin;
  //InsertLoginCredential
  Save(){
    this.login.userName = this.txtuserName;
    this.login.password = this.txtpassWord;
    console.log(this.login);
    this.customerService.InsertLoginCredential(this.login).subscribe(res => { console.log(res); });
    alert("Submitted Successfully");
  }
}
