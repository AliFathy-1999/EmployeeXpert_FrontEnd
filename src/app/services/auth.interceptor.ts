import { Injectable } from '@angular/core';
import { UserserviceService } from './userservice.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _userServices:UserserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this._userServices.getToken()
  
       request = request.clone({
      headers:request.headers.set('Authorization',`${token}`) 
   
    })
    return next.handle(request);
  }


}

export const AuthInterceptProvidoer = {
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
