import { Component, inject } from '@angular/core';
import { CartService } from '../../cart/data-access/cart.service';
import { Products } from '../../products/models/product.interface';
import { Articulo } from "../../review/articulo/articulo";
import { Envio } from "../../review/envio/envio";
import { Resumen } from "../../review/resumen/resumen";
import { Button } from "../../shared/ui/button/button";

@Component({
  selector: 'app-revision',
  imports: [Articulo, Envio, Resumen, Button],
  templateUrl: './revision.html',
  styleUrl: './revision.css'
})
export class Revision {

  private cartService = inject(CartService);

  products = this.cartService.cart

  constructor() { }

}
