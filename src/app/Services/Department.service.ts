import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

url:string='https://localhost:44384/api/department';
constructor(private _http:HttpClient) {}

getDepartments():Observable<Department[]>{
  return this._http.get<Department[]>(this.url);
 }
 createDepartment(department:Department):Observable<Department>{
  return this._http.post<Department>(this.url,department);
}
getDepartment(id:number):Observable<Department>{
  return this._http.get<Department>(`${this.url}/${id}`);
 }
Delete(id:number){
  return this._http.delete(`${this.url}/${id}`);
 }
}
