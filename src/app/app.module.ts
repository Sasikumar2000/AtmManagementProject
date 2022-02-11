import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AddCustomerDetailsComponent } from './Admin/add-customer-details/add-customer-details.component';
import { ViewCustomerDetailsComponent } from './Admin/view-customer-details/view-customer-details.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
