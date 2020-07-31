import { map, catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import JwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {
  private url: string = 'http://localhost:5000/api/auth';
  isLoggedIn: boolean = false;
  tokenKey = 'token';
  admin: any = [];
  jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.oFHBG72UhlhMkuZ7mrcAVazGoajttB9k06OHWC9sXFg';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(email, password): boolean {
    if (!(email == 'admin@gmail.com' && password == 'admin')) return false;
    localStorage.setItem(this.tokenKey, this.jwt);
    this.isLoggedIn = true;
    return true;
    // return this.http.post(this.url,JSON.stringify({email,password}),this.httpOptions)
    //   .pipe(map((response: Response)=>{
    //     if(response==null) return false;
    //     this.admin = response;
    //     this.isLoggedIn = true;
    //     return true;
    //   }))
  }

  getCurrentUser() {
    try {
      const jwt = localStorage.getItem(this.tokenKey);
      return JwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
