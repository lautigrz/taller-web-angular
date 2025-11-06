import { Component, computed, EventEmitter, inject, Input, input, Output, signal, Signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { Button } from '../../shared/ui/button/button';
import { CartService } from '../data-access/cart.service';
import { Producto } from '../../products/models/product.interface';
import { Router } from '@angular/router'
import { Articulo } from "../../review/articulo/articulo";

@Component({
  selector: 'app-carrito',
  imports: [DrawerModule, Button, Articulo],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  router = inject(Router)
  cartService = inject(CartService);
  products = this.cartService.cart;

  subTotal = computed(() =>
    this.products().reduce((sum, p) => sum + Number(p.precio), 0)
  );


  getImageUrl(url: string) {
    return `http://localhost:3000${url}`
  }



  procederAlPago(): void {
    const carritoData = {
      productos: this.products(),
      subTotal: this.subTotal(),
    };

    this.visibleChange.emit(false);
    sessionStorage.setItem('carrito', JSON.stringify(carritoData));

    this.router.navigate(['/pay']);
  }
}
