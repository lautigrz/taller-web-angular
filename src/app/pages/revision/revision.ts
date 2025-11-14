import { Component, inject } from '@angular/core';

import { Button } from "../../shared/ui/button/button";
import { MessageEmpty } from '../../shared/ui/message-empty/message-empty';
import { Router } from '@angular/router';
import { Articulo } from '../../components/review/articulo/articulo';
import { Envio } from '../../components/review/envio/envio';
import { Resumen } from '../../components/review/resumen/resumen';
import { CartService } from '../../components/cart/data-access/cart.service';

@Component({
  selector: 'app-revision',
  imports: [Articulo, Envio, Resumen, Button, MessageEmpty],
  templateUrl: './revision.html',
  styleUrl: './revision.css'
})
export class Revision {

  private cartService = inject(CartService);

  products = this.cartService.cart

  private route = inject(Router);

  constructor() { }


  confirmarPago() {

    this.cartService.clearCart()
    this.route.navigate(["/thanks"]);
  }

}
