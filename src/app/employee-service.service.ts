import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private url='http://localhost:3000/employees';
  emp:any
  public getEmployees(){
    return this.http.get(`${this.url}`);
  }
  public newEmployees(employee:any){
    return this.http.post(`${this.url}`,employee);
  }
  public deleteemp(id:any){
    return this.http.delete(`${this.url}`+'/'+id)
  }
  public getemp(id:any){
    return this.http.get(`${this.url}`+'/'+id);
  }

  public modifiieremp(id:any, employee:any){
    return this.http.put(`${this.url}`+'/'+id,employee);
  }
}
