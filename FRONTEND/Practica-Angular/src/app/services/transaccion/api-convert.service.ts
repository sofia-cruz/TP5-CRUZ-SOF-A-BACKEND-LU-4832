import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConvertService {

  constructor(private _http: HttpClient) { }

  public convert(value: string, from: string, to: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host':
          'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': '7dc2627901mshfa36a7cf5a5f6d3p19dc37jsn34ab6ed5b0f2',
      }),
    };
    const body = new HttpParams()
      .set('from-value', value)
      .set('from-type', from)
      .set('to-type', to);

    return this._http.post(
      'https://community-neutrino-currency-conversion.p.rapidapi.com/convert',
      body,
      httpOptions
    );
  }
}
