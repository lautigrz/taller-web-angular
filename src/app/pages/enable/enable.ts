import { Component, inject } from '@angular/core';
import { Products } from '../../products/models/product.interface';
import { ProductStateService } from '../../core/data-access/product-state.service';
import { ProductsService } from '../../products/data-access/products.service';
import { CartService } from '../../cart/data-access/cart.service';
import { AuthStateService } from '../../core/data-access/auth-state.service';
import { CardProducts } from "../../products/card-products/card-products";
import { MessageEmpty } from "../../shared/ui/message-empty/message-empty";

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
