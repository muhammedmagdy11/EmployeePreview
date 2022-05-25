import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../Services/Employee.service';
import { Employee } from '../../Models/Employee';
import { FamilyMember } from 'src/app/Models/FamilyMember';
import { DepartmentService } from 'src/app/Services/Department.service';
import { Department } from 'src/app/Models/Department';

@Component({
  selector: 'app-UpdateEmployee',
  templateUrl: './UpdateEmployee.component.html',
  styleUrls: ['./UpdateEmployee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private router:Router,private myroute:ActivatedRoute,private service:EmployeeService,private departmentService:DepartmentService) { }
  Employee:Employee=new Employee([]);
  Departments: Department[]=[];
@ViewChild('MemberName',{read:ElementRef}) MemberName!: ElementRef;
@ViewChild('MemberRelation',{read:ElementRef}) MemberRelation!: ElementRef;
    ngOnInit(): void {
      this.service.getEmployee(this.myroute.snapshot.params['id']).subscribe(
        emp=>{
          this.Employee=emp;
          this.Employee.birthdate='2022-05-14';
          console.log(this.Employee);
             });
        this.departmentService.getDepartments().subscribe(
          departments => {
            this.Departments = departments;
          });
    }
  Update(){
    this.service.UpdateEmployee(this.Employee).subscribe(res=> this.router.navigate(['employees']));
  }
  AddMember(){
    this.Employee.familyMembers.push({id:0,name:this.MemberName.nativeElement.value,relation:this.MemberRelation.nativeElement.value,employeeId:0});
    this.MemberName.nativeElement.value='';
    this.MemberRelation.nativeElement.value='';
  }
  DeleteMember(item:FamilyMember){
    let index=this.Employee.familyMembers.findIndex(e=>e===item);
    this.Employee.familyMembers.splice(index,1);
  }

}
