import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  
  public loginForm!:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router ) { }

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

  login(){
   if(this.username=="admin"&& this.password=="admin"){
    //  alert("Login Success")
     this.router.navigate(['navbar'])
   }
   else{
     alert("User Not Found")
   }
  }

}
