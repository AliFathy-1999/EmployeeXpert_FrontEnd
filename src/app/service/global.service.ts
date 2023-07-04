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
  api_url: string = 'https://employee-xpert.onrender.com/';
  constructor(private _http: HttpClient, private _router: Router) { 
  }

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }

  getToken() {
    return localStorage.getItem('userToken');
  }

  signIn(obj:any): Observable<any>{
    return this._http.post(`${this.api_url}/signin`,obj);
  }

}

