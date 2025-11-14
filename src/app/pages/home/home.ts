
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';


import { ProductStateService } from '../../core/data-access/product-state.service';

import { MessageEmpty } from '../../shared/ui/message-empty/message-empty';
import { AuthStateService } from '../../core/data-access/auth-state.service';
import { Button } from "../../shared/ui/button/button";
import { CardProducts } from '../../components/products/card-products/card-products';
import { FiltroComponent } from '../../components/filtro/filtro.component';
import { ProductsService } from '../../components/products/data-access/products.service';
import { CartService } from '../../components/cart/data-access/cart.service';
import { Products } from '../../components/products/models/product.interface';


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
