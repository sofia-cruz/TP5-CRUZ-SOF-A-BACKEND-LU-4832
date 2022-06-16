import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasajeType } from 'src/app/models/pasaje-type';

@Injectable({
  providedIn: 'root'
})
export class ApiPasajeService {
  baseURL: string = "http://localhost:3000/api/pasaje";

  constructor(private _http: HttpClient) { }

  getPasajes(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };

    return this._http.get(this.baseURL, httpOptions);
  }

  deletePasaje(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };

    return this._http.delete(this.baseURL + '/' + id, httpOptions);
  }

  getPasaje(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      }),
     params: new HttpParams({
      }).append("id", id)
    };

    return this._http.get(this.baseURL + '/' + id, httpOptions);
  }

  createPasaje(pasaje: PasajeType): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    let body = JSON.stringify(pasaje);

    return this._http.post(this.baseURL, body, httpOptions)
  }

  editPasaje(pasaje: PasajeType){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };
    
    let body = JSON.stringify(pasaje);

    return this._http.put(this.baseURL + "/" + pasaje._id, body, httpOptions)

  }

  getPasajesFiltro(categoria: string):Observable<any> {
    const httpOptions = {
      params: {
        "categoria": categoria
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this._http.get(this.baseURL + '/pasajeros', httpOptions)
  }
}
