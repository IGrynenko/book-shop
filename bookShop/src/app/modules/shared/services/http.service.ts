import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(environment.baseUrl + url);
  }

  getOnClient<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(environment.clientUrl + url);
  }

  post<T>(url: string, obj: T): Observable<T> {
    return this.httpClient.post<T>(environment.baseUrl + url, obj);
  }

  put<T>(url: string, obj: T): Observable<T> {
    return this.httpClient.put<T>(environment.baseUrl + url, obj);
  }

  patch<T>(url: string, obj: T): Observable<T> {
    return this.httpClient.patch<T>(environment.baseUrl + url, obj);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(environment.baseUrl + url);
  }
}
