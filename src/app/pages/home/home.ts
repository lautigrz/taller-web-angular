import { CardProducts } from './../../products/card-products/card-products';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';
import { Producto, Products } from '../../products/models/product.interface';
import { CartService } from '../../cart/data-access/cart.service';
import { ProductsService } from '../../products/data-access/products.service';
import { ProductStateService } from '../../core/data-access/product-state.service';
import { AuthStateService } from '../../core/data-access/auth-state.service';

@Component({
  selector: 'app-home',
  imports: [CardProducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private productsState = inject(ProductStateService);
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





}
