import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../Services/customer.service';
import { IAdminLongin } from '../Models/iadmin-longin';

import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  passWord:any;
  adminLogin:IAdminLongin[] = [];
  userName1:string="";
  passWord1:string="";
  
  public loginForm!:FormGroup;
  
 
  

  constructor(private customerServices: CustomerService, private formBuilder:FormBuilder,private http:HttpClient,private router:Router ) 
  { 
    customerServices.GetLoginCredential().subscribe((c) => { this.adminLogin = c;});
    console.log(this.loginForm);
  }


  ngOnInit(): void {
    // this.loginForm=new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', Validators.required)
    // })
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  count:number=0;
  login(){
    //console.log(this.count);
    for(let i=0; i<this.adminLogin.length; i++)
    {
      if(this.username==this.adminLogin[i].userName&& this.passWord==this.adminLogin[i].password)
      {
        this.router.navigate(['navbar']);
        this.count++;
      }

    }
    //console.log(this.count);
   if(this.count == 0)
   {
     alert("User Not Found");
   }
  }

}
