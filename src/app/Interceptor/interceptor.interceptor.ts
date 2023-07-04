import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../service/global.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private _authService: GlobalService) {}
  token = this._authService.getToken()
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.token){
      return next.handle(request.clone({ setHeaders: { Authorization: `brearer ${this.token}` } }));
    }
    return next.handle(request);
  }
}
