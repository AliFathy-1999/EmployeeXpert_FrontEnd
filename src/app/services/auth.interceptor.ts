import { Injectable } from '@angular/core';
import { UserserviceService } from './userservice.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _userServices:UserserviceService,private _route: ActivatedRoute,
    private _router: Router,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this._userServices.getToken()
  // if(token){
    request = request.clone({
      headers:request.headers.set('Authorization',`brearer ${token}`) 
   
    })
    return next.handle(request);
 // }
  // else{
  //   this._router.navigate(['']);
  // }
    
  }


}

export const AuthInterceptProvidoer = {
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
