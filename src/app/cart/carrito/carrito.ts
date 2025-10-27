import { Component, computed, EventEmitter, inject, Input, input, Output, signal, Signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { Button } from '../../shared/ui/button/button';
import { CartService } from '../data-access/cart.service';
import { Producto } from '../../products/models/product.interface';

@Component({
  selector: 'app-carrito',
  imports: [DrawerModule, Button],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();


  cartService = inject(CartService);


  products = this.cartService.cart;

  subTotal = computed(() =>
    this.products().reduce((sum, p) => sum + p.precio, 0)
  );

  removeProduct(index: number) {
    this.cartService.removeProduct(index);
  }
}
