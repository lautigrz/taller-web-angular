import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { Equipo, Liga } from '../../products/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private http = inject(HttpClient)

  private baseUrl = environment.apiUrl;

  constructor() { }
  obtenerLigas(): Observable<Liga[]> {
    return this.http.get<Liga[]>(`${this.baseUrl}${environment.getAllLiga}`, { withCredentials: true })
  }

  obtenerEquipoDeUnaLiga(id: number): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.baseUrl}${environment.getAllLiga}/${id}`, { withCredentials: true })
  }
}
