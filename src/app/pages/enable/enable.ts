import { Component, inject } from '@angular/core';

import { ProductStateService } from '../../core/data-access/product-state.service';


import { AuthStateService } from '../../core/data-access/auth-state.service';

import { MessageEmpty } from "../../shared/ui/message-empty/message-empty";
import { CardProducts } from '../../components/products/card-products/card-products';
import { ProductsService } from '../../components/products/data-access/products.service';
import { CartService } from '../../components/cart/data-access/cart.service';
import { Products } from '../../components/products/models/product.interface';

@Component({
  selector: 'app-enable',
  imports: [CardProducts, MessageEmpty],
  templateUrl: './enable.html',
  styleUrl: './enable.css'
})
export class Enable {
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

    this.productsState.loadProductsDisabled();

  }

  onHabilitarProducto(producto: Products) {

    this.productsService.habilitarProducto(producto.id).subscribe({
      next: () => {

        this.productsState.loadProductsDisabled();
      },
      error: (err) => {
        console.error('Error al habilitar el producto:', err);
      }
    });
  }

}
