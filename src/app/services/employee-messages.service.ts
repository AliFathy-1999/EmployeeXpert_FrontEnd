import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeMessagesService {
  ROOT_URL: string = 'https://employee-xpert.onrender.com/communications';
  Data :any =''
  constructor(private _http: HttpClient, private _router: Router) {
   
   }

   getUserMessages():Observable<any>{
    return  this._http.get(`${this.ROOT_URL }`+'/myMessages')
   }
   
   getAdminMessages(EmpId:string){
    return  this._http.get(`${this.ROOT_URL }`+'/EmpolyeeMessages/'+`${EmpId}`)
   }

   sendMessage(MessageData:string){
    return  this._http.post(`${this.ROOT_URL }`+'/toemployee/',MessageData)
   }
   

}
