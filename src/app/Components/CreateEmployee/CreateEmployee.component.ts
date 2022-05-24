import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FamilyMember } from 'src/app/Models/FamilyMember';
import { EmployeeService } from 'src/app/Services/Employee.service';
import { Employee } from '../../Models/Employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-CreateEmployee',
  templateUrl: './CreateEmployee.component.html',
  styleUrls: ['./CreateEmployee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }
Employee:Employee=new Employee([]);
@ViewChild('MemberName',{read:ElementRef}) MemberName!: ElementRef;
@ViewChild('MemberRelation',{read:ElementRef}) MemberRelation!: ElementRef;
@Output() CreateEvent = new EventEmitter<Employee>();
file!:File;
  ngOnInit() {
  }
  submit(form:NgForm)
  {
    this.service.createEmployee(this.Employee).subscribe(CreatedEmp =>{
      this.CreateEvent.emit(CreatedEmp)
    form.resetForm();
    this.Employee.familyMembers=[];
    })

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
  // onFileUpload(event:any){
  //   this.file = event.target.files[0];
  //   this.file.saveas
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //   this.Employee.photo = reader.readAsText as string;
  //   };
  //   reader.readAsDataURL(this.file);
  //   }
//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'your-destination-url';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this.httpClient
//       .post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }
}
