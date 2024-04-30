import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environments/env';

const headers = new HttpHeaders({
  'ngrok-skip-browser-warning': 'any-value',
  'Accept':'*/*'
});

export interface IClasificacionModel {
  id: number;
  nombre?: null | string;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClasificacionesService {

  constructor(private http: HttpClient) { }
  url = env.API_URL + 'clasificacion'
  
  getAll(): Observable<any> {
    return this.http.get(this.url+'/getall', {headers} );
  }

  get(id: number): Observable<IClasificacionModel> {
    const url = `${this.url}/get/${id}`;
    return this.http.get<IClasificacionModel>(url, {headers} );
  }

  update( data: any): Observable<IClasificacionModel> {
    const url = `${this.url}/update`;
    return this.http.post<IClasificacionModel>(url, data);
  }

  cambiarestado(id: number): Observable<any> {
    return this.http.post(this.url+'/cambiarestado/', {id});
  }

  crear(data: any): Observable<IClasificacionModel> {
    return this.http.post<IClasificacionModel>(this.url+'/create/', data);
  }
}
