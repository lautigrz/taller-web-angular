import { CardProducts } from './../../products/card-products/card-products';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';
import { Producto, Products } from '../../products/models/product.interface';
import { CartService } from '../../cart/data-access/cart.service';
import { ProductsService } from '../../products/data-access/products.service';
import { ProductStateService } from '../../core/data-access/product-state.service';
import { FiltroComponent } from '../../filtro/filtro.component';

@Component({
  selector: 'app-home',
  imports: [CardProducts, FiltroComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private prouctsService = inject(ProductsService)
  private productsState = inject(ProductStateService);
  products = this.productsState.products;
  cartService = inject(CartService)



  ngOnInit(): void {
    
      this.productsState.loadProducts();
    
  }





}
