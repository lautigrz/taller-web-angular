import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Products } from '../models/product.interface';
import { Observable } from 'rxjs';

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

}
