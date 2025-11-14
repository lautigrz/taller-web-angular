import { Component, computed, EventEmitter, inject, Input, input, Output, signal, Signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';

import { CartService } from '../data-access/cart.service';

import { Router } from '@angular/router'
import { Articulo } from "../../review/articulo/articulo";
import { Button } from '../../../shared/ui/button/button';
import { MessageEmpty } from '../../../shared/ui/message-empty/message-empty';
import { UiService } from '../../../shared/data-access/ui.service';
import { AuthStateService } from '../../../core/data-access/auth-state.service';



@Component({
  selector: 'app-carrito',
  imports: [DrawerModule, Button, Articulo, MessageEmpty],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  router = inject(Router)
  cartService = inject(CartService);
  products = this.cartService.cart;

  private uiService = inject(UiService);
  private authStateService = inject(AuthStateService)

  getImageUrl(url: string) {
    return `http://localhost:3000${url}`
  }



  procederAlPago(): void {

    if (!this.authStateService.isAuthenticated) {
         console.log("no autenticado")
      this.uiService.showLogin();
      return;
    }

    console.log("autenticado")
    const carritoData = {
      productos: this.products(),
      subTotal: this.cartService.subTotal(),
    };

    this.visibleChange.emit(false);
    sessionStorage.setItem('carrito', JSON.stringify(carritoData));

    this.router.navigate(['/pay']);
  }
}
