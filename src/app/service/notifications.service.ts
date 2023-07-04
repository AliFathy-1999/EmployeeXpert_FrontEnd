
import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import jwtDecode from 'jwt-decode';
  import { Router } from '@angular/router';
  @Injectable({
    providedIn: 'root'
  })
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  
    ROOT_URL: string = 'http://localhost:4000';
   
    constructor(private _http: HttpClient) {
     
     }

getMessageNotifications(){
        
  return this._http.get(`${this.ROOT_URL }`+'/communications/message?pages=1&limit=100').subscribe((res)=>{
    console.log("nnn")
  })


}

getAnnouncementNotifications(){

  return this._http.get(`${this.ROOT_URL }`+'/communications/announcement?pages=1&limit=100')

}




}