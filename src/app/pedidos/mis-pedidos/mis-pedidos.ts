import { Component, OnInit  } from '@angular/core';
import { PedidosService } from '../data-access/pedidos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-pedidos',
  imports: [CommonModule,FormsModule],
  templateUrl: './mis-pedidos.html',
  styleUrl: './mis-pedidos.css'
})
export class MisPedidos implements OnInit {

  pedidos: any[] = [];
  searchTerm: string = '';


  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void{
    this.cargarPedidos();
  }

  cargarPedidos(){
    this.pedidosService.obtenerPedidosUsuario().subscribe({
      next: (res: any) => {
        this.pedidos = res
      

        console.log(this.pedidos)
      },
      error: (err) => console.error('Error al obtener pedidos', err)
    });
  }


  filtrarPedidos(){
    const term = this.searchTerm.toLowerCase();
    return this.pedidos.filter(p=>
      p.id.toString().includes(term) ||
      p.productos.some((prod: any) => prod.producto.titulo.toLowerCase().includes(term))
    )
  }

    getImageUrl(url: any) {
       console.log("daads")
      console.log("url",url)
    return `http://localhost:3000${url.url}`
  }

}
