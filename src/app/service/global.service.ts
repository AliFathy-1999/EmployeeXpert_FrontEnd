import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public api_url = 'https://employee-xpert.onrender.com'
  constructor(private http: HttpClient) { }
  signIn(obj:any) {
    return this.http.post(`${this.api_url}/signin`,obj);
  }
}
