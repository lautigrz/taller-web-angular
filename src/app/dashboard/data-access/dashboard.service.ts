import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Liga } from '../models/liga.interface';
import { Equipo } from '../models/equipo.interface';
import { ProductoFormValue } from '../models/new-product.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient)

  private baseUrl = environment.apiUrl;

  constructor() { }


  obtenerLigas(): Observable<Liga[]> {
    return this.http.get<Liga[]>(`${this.baseUrl}${environment.getAllLiga}`)
  }

  obtenerEquipoDeUnaLiga(id: number): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.baseUrl}${environment.getAllLiga}/${id}`)
  }

  crearNuevoProducto(newProduct: ProductoFormValue) : Observable<any> {
    const formData = new FormData();

    formData.append('titulo', newProduct.titulo)
    formData.append('descripcion', newProduct.descripcion!)
    formData.append('precio', newProduct.precio.toString())
    formData.append('liga', newProduct.liga)
    formData.append('equipoId', newProduct.equipo)

    newProduct.imagen?.forEach((file, i) => {
      formData.append('imagenes', file);
    })

    newProduct.tallasDisponibles.forEach((talla, i) => {
      formData.append('talla[]', talla)
    })

    return this.http.post<any>(`${this.baseUrl}${environment.createProductEndpoint}`, formData)

  }


}
