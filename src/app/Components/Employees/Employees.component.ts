import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/Employee.service';
import { DepartmentService } from '../../Services/Department.service';
import { Department } from '../../Models/Department';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private empservice: EmployeeService) {

  }
  @ViewChild('StartDate',{read:ElementRef}) StartDate!: ElementRef;
  @ViewChild('EndDate',{read:ElementRef}) EndDate!: ElementRef;
  Employees: Employee[]=[];
  AllEmployees:Employee[]=this.Employees;
  ngOnInit(): void {
    this.empservice.getEmployees().subscribe(
      employees => {
        this.Employees = employees;
        this.AllEmployees = employees;
      });

  }
  // changeInput(){
  //   this.filteredEmployees=this.Employees.filter(e=>new Date(e.birthdate)>=new Date(this.StartDate.nativeElement.value) && new Date(e.birthdate)<=new Date(this.EndDate.nativeElement.value));
  // }
  Created(CreatedEmp:Employee){
   this.Employees.push(CreatedEmp);
  }
  deleteEmployee(id:number){
    if(confirm("Are you sure to delete this record ?")) {
    this.empservice.Delete(id).subscribe(()=>{this.ngOnInit();});
    }
  }
  filterDate(){
    this.Employees=this.AllEmployees.filter(e=>e.birthdate>=this.StartDate.nativeElement.value&&e.birthdate<=this.StartDate.nativeElement.value);
  }
  clearFilter(){
    this.Employees=this.AllEmployees;
  }

//this.Employees=this.Employees.filter(e=>e.birthdate>=this.filters['from'] && e.birthdate<=this.filters['to']);


}
