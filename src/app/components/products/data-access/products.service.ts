import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Products } from '../models/product.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private httpClient = inject(HttpClient)

  private baseUrl = environment.apiUrl;
  constructor(){}

  getAllProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.baseUrl}${environment.getAllProducts}`)
  }

  deshabilitarProducto(id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}${environment.toChangeStateEndpoint}${id}`, {}, {withCredentials: true});
  }

  getAllProductsDisabled(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.baseUrl}${environment.getAllProductsDisabledEndpoint}`, {withCredentials: true});
  }

  habilitarProducto(id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}${environment.toChangeStateEndpoint}${id}`, {}, {withCredentials: true});
  }

}
