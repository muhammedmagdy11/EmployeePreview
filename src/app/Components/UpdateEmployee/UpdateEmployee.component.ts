import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../Services/Employee.service';
import { Employee } from '../../Models/Employee';
import { FamilyMember } from 'src/app/Models/FamilyMember';

@Component({
  selector: 'app-UpdateEmployee',
  templateUrl: './UpdateEmployee.component.html',
  styleUrls: ['./UpdateEmployee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private router:Router,private myroute:ActivatedRoute,private service:EmployeeService) { }
  Employee:Employee=new Employee([]);
@ViewChild('MemberName',{read:ElementRef}) MemberName!: ElementRef;
@ViewChild('MemberRelation',{read:ElementRef}) MemberRelation!: ElementRef;
    ngOnInit(): void {
      this.service.getEmployee(this.myroute.snapshot.params['id']).subscribe(
        emp=>{this.Employee=emp;});
    }
  Update(){
    console.log(this.Employee);
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
