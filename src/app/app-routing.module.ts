import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeesComponent } from './Components/Employees/Employees.component';
import { UpdateEmployeeComponent } from './Components/UpdateEmployee/UpdateEmployee.component';
import { CreateEmployeeComponent } from './Components/CreateEmployee/CreateEmployee.component';
const routes: Routes = [
  {path:'employee', component:EmployeeComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'employees/create', component:CreateEmployeeComponent},
  {path:'employees/update/:id', component:UpdateEmployeeComponent},
  {path:'employees/details/:id', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
