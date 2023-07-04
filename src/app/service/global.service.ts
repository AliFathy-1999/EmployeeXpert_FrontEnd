import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
