
import { ITransaction } from '../Models/itransaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../Models/icustomer';
// import { ITransaction } from '../Models/itransaction';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http :HttpClient) { console.log("DataBase Connected!..")}

  GetCustomerDetails():Observable<Icustomer[]> {
    return this.http.get<Icustomer[]>("http://localhost:27418/api/Customer");
  }

  GetTransaction(accountNumber:number):Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>("http://localhost:27418/api/Transaction/GetAccountNumber?accountNumber=" + accountNumber);
  }

  SaveCustomerDetails(customer: Icustomer) {
    return this.http.post("http://localhost:27418/api/Customer/InsertCustomer", customer);
  }
 
  UpdateCustomerDetails(customer:Icustomer) {

    return this.http.put("http://localhost:27418/api/Customer/UpdateCustomer",customer);

  }

  RemoveCustomerDetails(accountNumber: number) {

    return this.http.delete("http://localhost:27418/api/Customer/DeleteCustomer?AccountNumber=" + accountNumber);

  }
}
