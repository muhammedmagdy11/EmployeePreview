import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { FamilyMember } from 'src/app/Models/FamilyMember';
import { EmployeeService } from 'src/app/Services/Employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:Employee= new Employee([]);
constructor(private myroute:ActivatedRoute,private service:EmployeeService) { }
ngOnInit(): void {
  this.service.getEmployee(this.myroute.snapshot.params['id']).subscribe(
    emp=>{this.employee=emp;});
  }


}
