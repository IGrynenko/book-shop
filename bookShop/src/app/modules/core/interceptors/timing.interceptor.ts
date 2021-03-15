import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const initialTime = Date.now();
    
    return next.handle(request).pipe(tap(event => {
      if (event && event instanceof HttpResponse && event.url.includes(environment.baseUrl)
          && (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE')) {
        const operationTime = Date.now() - initialTime;
        console.log(operationTime);
      }
    }))
  }
}
