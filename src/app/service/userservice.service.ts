
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  currentUser = new BehaviorSubject(null);
  ROOT_URL: string = 'https://employee-xpert.onrender.com/';
  constructor(private _http: HttpClient, private _router: Router) { 


  }

  login(data: any, endPoint: string): Observable<any> {


    return this._http.post(`${this.ROOT_URL + endPoint}`, data);
  }

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }

  getToken() {
    return localStorage.getItem('userToken');
  }
}
