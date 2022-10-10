import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Car } from '../car';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private BASE_URL = environment.API_URL;
  private loginStatus = new BehaviorSubject('0');
  currentStatus = this.loginStatus.asObservable();
  private logoutStatus = new BehaviorSubject('0');
  currentlogStatus = this.logoutStatus.asObservable();

  token_expire: any = '';
  token: any = '';
  username: any = '';

  isloggedout: boolean = false;


  constructor(private http: HttpClient) { }

  post(url: any, body: any, header: any): Observable<any> {
    if (header && header != '') {
      return this.http.post(this.BASE_URL + url, body, header);
    }
    else {
      return this.http.post(this.BASE_URL + url, body);
    }
  }
  get(url: any, header: any): Observable<any> {
    if (header && header != '') {
      return this.http.get(this.BASE_URL + url, header);
    }
    else {
      return this.http.get(this.BASE_URL + url, header);
    }
  }
  put(url: any, body: any, header: any): Observable<any> {
    if (header && header != '') {
      return this.http.put(this.BASE_URL + url, body, header);
    }
    else {
      return this.http.put(this.BASE_URL + url, body);
    }
  }



  logoutservice() {
    this.token = localStorage.getItem('token');
    this.token_expire = localStorage.getItem('expires_in');
    this.username = localStorage.getItem('username');
    if (this.token != null && this.token_expire != null && this.username != null) {
      this.isloggedout = true;

      return this.isloggedout;
    }
    else {
      this.isloggedout = false;
      return this.isloggedout;
    }
  }

 
  



}
