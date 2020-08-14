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

  reconnect(){
    this.http.get(`/api/reconnect`);
  }

  changeRoute(src: number, dst: number){
    console.log(src, dst);
    return this.http.get(`/api/set?src=${src}&dst=${dst}`);

  }
}
