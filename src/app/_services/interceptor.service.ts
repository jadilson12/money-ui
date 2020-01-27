import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // tslint:disable-next-line:max-line-length
    const token = window.localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(request);
  }
}
