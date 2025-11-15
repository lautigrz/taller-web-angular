
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
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { LoadingComponent } from "../../shared/ui/loading-component/loading-component";


@Component({
  selector: 'app-home',
  imports: [CardProducts, MessageEmpty, Button, FiltroComponent, PaginatorModule, LoadingComponent],
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
  first: number = 1;
  rows: number = 12;
  loading = this.productsState.loading
  totalPage = this.productsState.totalProducts;

  rol: string = '';
  isFilterOpen = false;
  filtros: any = {};

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

  
aplicarFiltros(filtros: any) {
  this.filtros = filtros;


  this.first = 0;

  this.productsState.loadProducts(1, this.rows, this.filtros);
}


  onPageChange(event: PaginatorState) {
    const page = (event.first! / event.rows!) + 1;
    const limit = event.rows!;

    this.productsState.loadProducts(page,limit);
  }

  onFilterClick() {
    this.isFilterOpen = !this.isFilterOpen;
  }


  ngOnInit(): void {
    this.productsState.loadProducts();
  }

  onDeshabilitarProducto(producto: Products) {

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
