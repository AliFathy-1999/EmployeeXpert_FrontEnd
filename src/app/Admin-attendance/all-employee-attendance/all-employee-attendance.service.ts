import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from './all-employee-attendance.model';


@Injectable({
  providedIn: 'root'
})
export class AllAttendanceService {
  private apiUrl = 'http://localhost:4000/attendance'; // Replace this with your backend API URL

  constructor(private http: HttpClient) { }

  // Define your API endpoints here
  all(page: number = 1, limit: number = 10): Observable<any> {
    console.log("hi")
    const token: any = localStorage.getItem("userToken")!;
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `bearer ${token}`,
    })
    const url = `${this.apiUrl}/allEmployees/?page=${page}&limit=${limit}`;
    return this.http.get<any>(url,{
      headers,
    });

  }
}

