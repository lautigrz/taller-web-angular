import { Component, computed, inject, OnInit } from '@angular/core';
import { CartService } from '../../cart/data-access/cart.service';



@Component({
  selector: 'app-resumen',
  imports: [],
  templateUrl: './resumen.html',
  styleUrl: './resumen.css'
})
export class Resumen {
  cartService = inject(CartService)

  constructor() {

  }

  priceEnvio = computed(() => this.cartService.envio());

  priceFinal = computed(() => {

    return this.cartService.subTotal() + this.priceEnvio();
  });



}
