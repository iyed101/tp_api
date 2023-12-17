import { Component } from '@angular/core';
import { EmployeeService } from './employee-service.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employees : any;
  employee={
    name : '',
    status: ''
  }
  
  constructor(private empService:EmployeeService ) {
empService.getEmployees().subscribe(response =>
  {
  this.employees = response
  });
  }
  
  add() {
    this.empService.newEmployees(this.employee).subscribe(
      () => {
        this.employee = { name: '', status: '' };
        this.refresh();
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }
  
  refresh() {
    this.empService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error) => {
        console.error('Error refreshing employees:', error);
      }
    );
  }
  
  supp(id: any) {
    this.empService.deleteemp(id).subscribe(
      () => {
        this.refresh();
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
  
$
  edit(employee: Employee) {
    this.employee = { ...employee }; 
  }

  update() {
    if (this.employee) {
      this.empService.modifiieremp(this.employee.id, this.employee).subscribe(() => {
        this.employee = null;
        this.refresh();
      });
    }
  }
}
