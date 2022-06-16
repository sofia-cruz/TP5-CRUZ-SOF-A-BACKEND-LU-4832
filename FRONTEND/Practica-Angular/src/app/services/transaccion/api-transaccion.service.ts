import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransaccionType } from 'src/app/models/transaccion-type';

@Injectable({
  providedIn: 'root'
})
export class ApiTransaccionService {
  baseURL: string = "http://localhost:3000/api/transaccion";

  constructor(private _http: HttpClient) { }

  crearTransaccion(transaccion: TransaccionType):Observable<any> {
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    const body = JSON.stringify(transaccion);
    return this._http.post(this.baseURL, body, httpOptions);
  }

  getTransacciones():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this._http.get(this.baseURL, httpOptions)
  }

  getTransaccionesFiltro(divisaOrigen: string, divisaDestino: string):Observable<any> {
    const httpOptions = {
      params: {
        "divisaOrigen": divisaOrigen,
        "divisaDestino": divisaDestino
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this._http.get(this.baseURL + '/filterbyDivisas', httpOptions)
  }
}
