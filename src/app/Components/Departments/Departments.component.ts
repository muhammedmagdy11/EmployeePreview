import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Department } from '../../Models/Department';
import { DepartmentService } from '../../Services/Department.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-Departments',
  templateUrl: './Departments.component.html',
  styleUrls: ['./Departments.component.css']
})
export class DepartmentsComponent implements OnInit {
Departments:Department[]=[];
Department!:Department;
Employees:Employee[]=[];
@ViewChild('name',{read:ElementRef}) name!: ElementRef;

  constructor(private service:DepartmentService) { }

  ngOnInit() {
    this.service.getDepartments().subscribe(
      departments => {
        this.Departments = departments;
      });
  }
  deleteDepartment(id:number){
    if(confirm("Are you sure to delete this record ?")) {
      this.service.Delete(id).subscribe(()=>{this.ngOnInit();});
      }
  }
Create(){
  this.service.createDepartment({id:0,name:this.name.nativeElement.value,employees:[]}).subscribe(
    department => {
      this.Departments.push(department);
      this.name.nativeElement.value='';
    });
}
setEmployees(id:number){
  this.service.getDepartment(id).subscribe(
    department => {
      this.Department = department;
      this.Employees=this.Department.employees;
    });
}
}
