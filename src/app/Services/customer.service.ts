
import { ITransaction } from '../Models/itransaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../Models/icustomer';
import { IAdminLongin } from '../Models/iadmin-longin';
// import { ITransaction } from '../Models/itransaction';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http :HttpClient) { console.log("DataBase Connected!..")}
  //http://localhost:27418/api/AdminLongin/GetLoginCredential
  GetLoginCredential():Observable<IAdminLongin[]> {
    return this.http.get<IAdminLongin[]>("http://localhost:27418/api/AdminLongin/GetLoginCredential");
  }

  GetCustomerDetails():Observable<Icustomer[]> {
    return this.http.get<Icustomer[]>("http://localhost:27418/api/Customer");
  }

  GetCustomerDetailsByAcc(accountNumber:number):Observable<Icustomer> {
    console.log(accountNumber);
    return this.http.get<Icustomer>("http://localhost:27418/api/Customer/GetAccountNumber?AccountNumber="+accountNumber);
  }

  GetTransaction(accountNumber:number):Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>("http://localhost:27418/api/Transaction/GetAccountNumber?accountNumber=" + accountNumber);
  }

  SaveCustomerDetails(customer: Icustomer) {
    return this.http.post("http://localhost:27418/api/Customer/InsertCustomer", customer);
  }
  //http://localhost:27418/api/AdminLongin/GetLoginCredential
  InsertLoginCredential(adminLogin:IAdminLongin){
    return this.http.post("http://localhost:27418/api/AdminLongin/InsertLoginCredential", adminLogin);
 
  }
 
  UpdateCustomerDetails(customer:Icustomer) {

    return this.http.put("http://localhost:27418/api/Customer/UpdateCustomer",customer);

  }

  RemoveCustomerDetails(accountNumber: number) {

    return this.http.delete("http://localhost:27418/api/Customer/DeleteCustomer?AccountNumber=" + accountNumber);

  }
}
