import { CardProducts } from './../../products/card-products/card-products';
import { Component, inject, OnInit } from '@angular/core';

import { Products } from '../../products/models/product.interface';
import { CartService } from '../../cart/data-access/cart.service';
import { ProductsService } from '../../products/data-access/products.service';
import { ProductStateService } from '../../core/data-access/product-state.service';
import { FiltroComponent } from '../../filtro/filtro.component';


@Component({
  selector: 'app-home',
  imports: [CardProducts, MessageEmpty],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private productsState = inject(ProductStateService);
  private productsService = inject(ProductsService);
  products = this.productsState.products;
  cartService = inject(CartService)
  private authState = inject(AuthStateService);
  isLoggedIn: boolean = false;
  rol: string = '';
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
