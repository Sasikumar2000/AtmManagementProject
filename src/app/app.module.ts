import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AddCustomerDetailsComponent } from './Admin/add-customer-details/add-customer-details.component';
import { ViewCustomerDetailsComponent } from './Admin/view-customer-details/view-customer-details.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCustomerDetailsComponent,
    ViewCustomerDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
