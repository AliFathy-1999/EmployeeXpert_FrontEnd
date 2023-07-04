import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public api_url = 'https://employee-xpert.onrender.com'
  public local_url = 'http://localhost:4000'
  constructor(private http: HttpClient) { }
  getToken(){
    return sessionStorage.getItem('token');
  }
  signIn(obj:any) {
    return this.http.post(`${this.api_url}/signin`,obj);
  }
  addEmployee(obj:any) {
    return this.http.post(`${this.api_url}/admin-emp`,obj);
  }
  getAllDepartment(page:number,limit:number) {
    return this.http.get(`${this.api_url}/admin-dep?page=${page}&limit=${limit}`);
  }
  getSelectedDepartment() {
    return this.http.get(`${this.api_url}/admin-dep/selected-dep`);
  }
  getEmployees(role:string="USER",page:number,limit:number) {
    return this.http.get<any[]>(`${this.api_url}/admin-emp?role=${role}&page=${page}&limit=${limit}`);
  }
  updateEmployee(id: any, employee: any): Observable<any> {
    return this.http.put(`${this.api_url}/admin-emp/${id}`, employee);
  }
  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(`${this.api_url}/admin-emp/${id}`);
  }
  getEmployeeDetails(id:any): Observable<any> {
    return this.http.get<any[]>(`${this.api_url}/${id}`);
  }
}
