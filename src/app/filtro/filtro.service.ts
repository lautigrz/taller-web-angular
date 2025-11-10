import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Filter } from './models';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  private apiUrl = 'http://localhost:3000/products'; // Cambia al endpoint real

  constructor(private http: HttpClient) {}

  filtrarProductos(filtros: Filter): Observable<Product[]> {
    let params = new HttpParams();

    if (filtros.deporte) params = params.append('deporte', filtros.deporte);
    if (filtros.categoria) params = params.append('categoria', filtros.categoria);
    if (filtros.talles?.length) params = params.append('talles', filtros.talles.join(','));
    if (filtros.precioMin !== undefined) params = params.append('precioMin', filtros.precioMin);
    if (filtros.precioMax !== undefined) params = params.append('precioMax', filtros.precioMax);

    return this.http.get<Product[]>(`${this.apiUrl}/filter`, { params });
  }
}