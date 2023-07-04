import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  currentUser = new BehaviorSubject(null);
  public api_url = 'https://employee-xpert.onrender.com'
  public local_url = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }
  getToken(){
    return sessionStorage.getItem('token');
  }
  signIn(obj:any): Observable<any>{
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

