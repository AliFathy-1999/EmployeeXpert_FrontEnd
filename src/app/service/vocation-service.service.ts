import { Vacation } from './../vacation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocationServiceService {
  public api_url = 'https://employee-xpert.onrender.com'
  public local_url = 'http://localhost:4000'

  constructor(private _http: HttpClient) { 
    
  }

  getAllVacations(page: number, limit: number): Observable<any> {
    // const options = { withCredentials: true};
    // console.log(limit);

    return this._http.get(`${this.api_url}/vacations/all?page=${page}&limit=${limit}`);

  }

  addVacationByAdmin(vacationData:any): Observable<any> {
   
    // const options = { withCredentials: true};
    return this._http.post(`${this.api_url}/vacations/admin`, vacationData);
  }
  

  getAllEmployeeVacations(page: number, limit: number): Observable<any> {
    // const options = { withCredentials: true};
    // console.log(limit);

    return this._http.get(`${this.local_url}/vacations/emp/all?page=${page}&limit=${limit}`);

  }


  deleteVacationById(id: number): Observable<any> {
    // const options = { withCredentials: true };
    // return this._HttpClient.delete(`https://bookary.onrender.com/admin/books/${id}`);
    return this._http.delete(`${this.api_url}/vacations/${id}`);

  }
}
