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
    console.log(new Date(this.StartDate.nativeElement.value))
    // let year=new Date(e.birthDate).getFullYear();
    // let month=new Date(e.birthDate).getMonth();
    // let day=new Date(e.birthDate).getDay();
    this.Employees=this.AllEmployees.filter(e=>new Date(e.birthDate)>=new Date(this.StartDate.nativeElement.value)&&new Date(e.birthDate)<=new Date(this.EndDate.nativeElement.value));
  }
  clearFilter(){
    this.Employees=this.AllEmployees;
    this.StartDate.nativeElement.value='';
    this.EndDate.nativeElement.value='';
  }

//this.Employees=this.Employees.filter(e=>e.birthdate>=this.filters['from'] && e.birthdate<=this.filters['to']);


}
