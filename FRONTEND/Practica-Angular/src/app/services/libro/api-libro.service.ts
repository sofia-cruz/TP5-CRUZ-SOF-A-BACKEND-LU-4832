import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibroType } from 'src/app/models/libro-type';

@Injectable({
  providedIn: 'root'
})
export class ApiLibroService {
  baseURL: string = "http://localhost:3000/api/libro";

  constructor(private _http: HttpClient) { }

  getLibrosDestacados(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    return this._http.get(this.baseURL + "/destacados", httpOptions);
  }

  crearLibro(libro: LibroType): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    const body = {
      titulo: libro.titulo,
      descripcion: libro.descripcion,
      imagen: libro.imagen,
      stock: libro.stock,
      destacado: libro.destacado
  }
    return this._http.post(this.baseURL, body, httpOptions);
  }
}
