import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../Models/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http :HttpClient) { console.log("DataBase Connected!..")}

  GetCustomerDetails():Observable<Icustomer[]> {
    return this.http.get<Icustomer[]>("http://localhost:25944/api/ATM");
  }
}
