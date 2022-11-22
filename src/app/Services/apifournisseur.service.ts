import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApifournisseurService {
  userForm: any;
  constructor(private _http: HttpClient) { }




  //connect frontend
  apiUrl = 'http://localhost:3000/fournisseur';

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data: any): Observable<any> {
    console.log(data, 'createapi=>')
    return this._http.post(`${this.apiUrl}`, data);

  }
  //delete data
  deleteData(id_fournisseur: any): Observable<any> {
    let ids = id_fournisseur;
    return this._http.delete(`${this.apiUrl} / ${ids}`);
  }
}