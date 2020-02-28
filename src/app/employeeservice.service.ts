import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  private _url:string = "/assets/employee.json";  

  getEmployee():Employee[]{
    return [ 
       {"id":1,"name":"test1"},
       {"id":2,"name":"test2"}
       ];
  }

  getEmployeeHttp(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url);
  }
}
