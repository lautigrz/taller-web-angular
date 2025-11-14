import { Component, inject } from '@angular/core';
import { CartService } from '../../cart/data-access/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Carrito } from '../../cart/carrito/carrito';
import { Pay } from '../../../pages/pay/pay/pay';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, Pay],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css'],
  providers: [Carrito]
})
export class Payment {

  cartService = inject(CartService);
  router = inject(Router);
  carrito = inject(Carrito)
  products = this.cartService.cart;

  constructor() {

  }

  confirmarPago(): void {
    if (this.products().length === 0) {
      console.error("El carrito está vacío. No se puede procesar el pago.");
      return;
    }

    this.cartService.clearCart();

    this.router.navigate(['/thanks']);
  }


}
