import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environments/env';


export interface IPlantaModel {
  id: number;
  nombre?: null | string;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  constructor(private http: HttpClient) { }
  url = env.API_URL + 'planta'
  
  getAll(): Observable<any> {
    return this.http.get(this.url+'/getall');
  }

  get(id: number): Observable<IPlantaModel> {
    const url = `${this.url}/get/${id}`;
    return this.http.get<IPlantaModel>((url));
  }

  update( data: any): Observable<IPlantaModel> {
    const url = `${this.url}/update`;
    return this.http.post<IPlantaModel>(url, data);
  }

  cambiarestado(id: number): Observable<any> {
    return this.http.post(this.url+'/cambiarestado/', {id});
  }

  crear(data: any): Observable<IPlantaModel> {
    return this.http.post<IPlantaModel>(this.url+'/create/', data);
  }
}