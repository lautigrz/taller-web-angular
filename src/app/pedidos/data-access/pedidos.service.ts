import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environments";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PedidosService{

  private httpClient = inject(HttpClient)
  private baseUrl = `${environment.apiUrl}/pedidos`;


  constructor() { }

  crearPedido(pedido: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl,pedido,{withCredentials: true});
  }

  obtenerPedidosUsuario(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/mis-pedidos`,{withCredentials: true});
  }


}
