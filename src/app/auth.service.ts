import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //get and set data from API
  constructor(private _HttpClient: HttpClient) {}
  register(registerData): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signup',
      registerData
    );
  }

  login(loginData): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signin',
      loginData
    );
  }
}
