import { FamilyMember } from "./FamilyMember";

export class Employee{

  constructor(familyMembers:FamilyMember[]) {
    this.familyMembers=familyMembers;

  }
  id!: number;
  firstName!:string;
  lastName!:string;
  address!:string;
  birthdate!:string;
  age!:number;
  departmentId!:number;
  mobile!:string;
  photo!:string;
  familyMembers!:FamilyMember[];
}
