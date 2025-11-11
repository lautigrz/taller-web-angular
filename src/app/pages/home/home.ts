import { CardProducts } from './../../products/card-products/card-products';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';

import { Products } from '../../products/models/product.interface';
import { CartService } from '../../cart/data-access/cart.service';
import { ProductsService } from '../../products/data-access/products.service';
import { ProductStateService } from '../../core/data-access/product-state.service';
import { FiltroComponent } from '../../filtro/filtro.component';
import { MessageEmpty } from '../../shared/ui/message-empty/message-empty';
import { AuthStateService } from '../../core/data-access/auth-state.service';
import { Button } from "../../shared/ui/button/button";


@Component({
  selector: 'app-home',
  imports: [CardProducts, MessageEmpty, Button, FiltroComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private productsState = inject(ProductStateService);
  private productsService = inject(ProductsService);
  private authState = inject(AuthStateService);

  products = this.productsState.products;
  cartService = inject(CartService)
  isLoggedIn: boolean = false;

  rol: string = '';
  isFilterOpen = false;


  constructor() {
    this.authState.isLoggedIn$.subscribe(isLogged => {
      this.isLoggedIn = isLogged;
    })
    this.authState.user$.subscribe(user => {
      if (user) {

        this.rol = user?.rol;
      }
    }
    );
  }

  onFilterClick() {
    this.isFilterOpen = !this.isFilterOpen;
  }


  ngOnInit(): void {
    this.productsState.loadProducts();
  }

  onDeshabilitarProducto(producto: Products) {
    console.log("Deshabilitar producto con id:", producto.id);
    this.productsService.deshabilitarProducto(producto.id).subscribe({
      next: () => {

        this.productsState.loadProducts();
      },
      error: (err) => {
        console.error('Error al deshabilitar el producto:', err);
      }
    });

  }

}
