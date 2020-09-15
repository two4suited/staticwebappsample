import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class HelloService{

constructor(
    private http: HttpClient) { }


  private api = 'api/GetMessage';

  /** GET heroes from the server */
getMessage(): Observable<string> {
    return this.http.get<string>(this.api)
  }
}