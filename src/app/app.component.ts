import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';

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
