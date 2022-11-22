import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  url = 'http://127.0.0.1:3000/user';



  constructor(private http: HttpClient) { }

  //create data
  /* createData(data: any): Observable<any> {
     console.log(data, 'createapi=>')
     return this.http.post(`${this.url}`, data);
 
   }*/
  /*
    getAllData(): Observable<any> {
      return this.http.get(`${this.url}`);
    }
  **/
  register(user: any) {

    return this.http.post(this.url , user);

  }

  login(user: any) {
    return this.http.post(this.url + 'login', user);
  }

}
