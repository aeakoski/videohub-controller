import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideohubConnectionService {

  constructor(
    private http: HttpClient
  ) { }

  changeRoute(src: number, dst: number){
    console.log(src, dst);
    return this.http.get("http://localhost:4808");

  }
}
