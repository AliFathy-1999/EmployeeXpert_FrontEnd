import { Injectable } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _userServices:UserserviceService,private _route: ActivatedRoute,
    private _router: Router,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this._userServices.getToken()
   console.log(`bearer ${token}`)
    if(token){
      
      const modifiedRequest = request.clone({ headers:request.headers.set('Authorization',`brearer ${token}`) })
      return next.handle(modifiedRequest).pipe(
        tap((response) => {
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
    }
    return next.handle(request);
}
}

export const AuthInterceptProvidoer = {
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
