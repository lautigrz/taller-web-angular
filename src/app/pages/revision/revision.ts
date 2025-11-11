import { Component, inject } from '@angular/core';
import { CartService } from '../../cart/data-access/cart.service';
import { Articulo } from "../../review/articulo/articulo";
import { Envio } from "../../review/envio/envio";
import { Resumen } from "../../review/resumen/resumen";
import { Button } from "../../shared/ui/button/button";
import { MessageEmpty } from '../../shared/ui/message-empty/message-empty';
import { Router } from '@angular/router';
import { PedidosService } from '../../pedidos/data-access/pedidos.service';

@Component({
  selector: 'app-revision',
  imports: [Articulo, Envio, Resumen, Button, MessageEmpty],
  templateUrl: './revision.html',
  styleUrls: ['./revision.css']
})
export class Revision {

  private cartService = inject(CartService);
  private pedidosService = inject(PedidosService);
  private router = inject(Router);

  products = this.cartService.cart;

  constructor() { }

  confirmarPago() {
    const productos = this.cartService.cart();

    if (productos.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    const productosAgrupados = Object.values(
      productos.reduce((acc, p) => {
        const key = `${p.id}_${p.talla || 'UNICA'}`;
        if (!acc[key]) {
          acc[key] = {
            productoId: p.id,
            cantidad: 1,
            talla: p.talla || '',
            precioUnitario: Number(p.precio),
            subtotal: Number(p.precio)
          };
        } else {
          acc[key].cantidad++;
          acc[key].subtotal += Number(p.precio);
        }
        return acc;
      }, {} as Record<string, any>)
    );

    const pedido = {
      productos: productosAgrupados,
      total: productosAgrupados.reduce((sum, p) => sum + p.subtotal, 0),
      direccion: '',
      metodoEnvio: this.cartService.metodoEnvio()
    };

    this.pedidosService.crearPedido(pedido).subscribe({
      next: () => {
        this.cartService.clearCart();
        this.router.navigate(['/thanks']);
      },
      error: (err) => {
        alert(`No se pudo crear el pedido: ${err?.message || JSON.stringify(err)}`);
      }
    })
  }
}
