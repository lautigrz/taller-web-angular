import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Data, Products } from '../models/product.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient)

  private baseUrl = environment.apiUrl;
  constructor() { }

  getAllProducts(page: number, limit: number, filtro: any = {}): Observable<Data> {
    const params = {
      page: page.toString(),
      ...filtro
    };
    return this.httpClient.get<Data>(`${this.baseUrl}${environment.getAllProducts}`, { params })
  }

  deshabilitarProducto(id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}${environment.toChangeStateEndpoint}${id}`, {}, { withCredentials: true });
  }

  getAllProductsDisabled(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.baseUrl}${environment.getAllProductsDisabledEndpoint}`, { withCredentials: true });
  }

  habilitarProducto(id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}${environment.toChangeStateEndpoint}${id}`, {}, { withCredentials: true });
  }

}
