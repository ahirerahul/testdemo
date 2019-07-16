import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule} from '@angular/forms';
import { LoopingComponent } from './looping/looping.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomerComponent,
    LoopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
