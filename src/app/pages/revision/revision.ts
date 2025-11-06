import { Component, inject } from '@angular/core';
import { CartService } from '../../cart/data-access/cart.service';
import { Articulo } from "../../review/articulo/articulo";
import { Envio } from "../../review/envio/envio";
import { Resumen } from "../../review/resumen/resumen";
import { Button } from "../../shared/ui/button/button";
import { MessageEmpty } from '../../shared/ui/message-empty/message-empty';
import { Router } from '@angular/router';

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
