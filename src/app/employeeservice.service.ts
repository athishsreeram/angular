import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpClient) { }

  private _url: string = "/assets/employee.json";

  getEmployee(): Employee[] {
    return [
      { "id": 1, "name": "test1" },
      { "id": 2, "name": "test2" }
    ];
  }

  getEmployeeHttp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url)
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
