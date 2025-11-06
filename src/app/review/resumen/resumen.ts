import { Component, inject } from '@angular/core';
import { CartService } from '../../cart/data-access/cart.service';


@Component({
  selector: 'app-resumen',
  imports: [],
  templateUrl: './resumen.html',
  styleUrl: './resumen.css'
})
export class Resumen {
  cartService = inject(CartService)
 




}
