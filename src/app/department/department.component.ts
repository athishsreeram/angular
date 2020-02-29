import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  displayName = true;

  items = ["a","b"];

  emp: Employee[];
  err: String;

  constructor(private es:EmployeeserviceService){

  }

  ngOnInit(): void {
    //this.emp = this.es.getEmployee();    
    this.es.getEmployeeHttp().subscribe(data => this.emp=data,
                                        error => this.err = error);
  }

}
