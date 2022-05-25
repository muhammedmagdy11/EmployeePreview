import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeesComponent } from './Components/Employees/Employees.component';
import { CreateEmployeeComponent } from './Components/CreateEmployee/CreateEmployee.component';
import { UpdateEmployeeComponent } from './Components/UpdateEmployee/UpdateEmployee.component';
import { DepartmentsComponent } from './Components/Departments/Departments.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass:AuthInterceptorService,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
