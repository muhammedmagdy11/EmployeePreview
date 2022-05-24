import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/Employee.service';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) {

  }
  @ViewChild('Date1',{read:ElementRef}) Date1!: ElementRef;
  @ViewChild('Date2',{read:ElementRef}) Date2!: ElementRef;
  Employees: Employee[]=[];
  filteredEmployees:Employee[]=this.Employees;
  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      employees => {
        console.log(employees);
        this.Employees = employees;
        this.filteredEmployees = employees;
        console.log("Employees");
        console.log(this.Employees);

      });
  }
  changeInput(){
    this.filteredEmployees=this.Employees.filter(e=>new Date(e.birthdate)>=new Date(this.Date1.nativeElement.value) && new Date(e.birthdate)<=new Date(this.Date2.nativeElement.value));
  }
  Created(CreatedEmp:Employee){
   this.Employees.push(CreatedEmp);
  }
  deleteEmployee(id:number){
    if(confirm("Are you sure to delete this record ?")) {
    this.service.Delete(id).subscribe(()=>{this.ngOnInit();});
    }
  }

//this.Employees=this.Employees.filter(e=>e.birthdate>=this.filters['from'] && e.birthdate<=this.filters['to']);


}
