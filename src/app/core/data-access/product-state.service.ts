import { inject, Injectable, signal } from '@angular/core';
import { Products } from '../../products/models/product.interface';
import { ProductsService } from '../../products/data-access/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  products = signal<Products[]>([]);
  private productService = inject(ProductsService);

  constructor(){}


  loadProducts(){
    this.productService.getAllProducts().subscribe({
      next: (data: Products[]) => {
        this.products.set(data);
      }
    })
  }
   addProduct(newProduct: Products) {
    
    this.products.update((current) => [newProduct, ...current]);
  }

    loadProductsDisabled(){
    this.productService.getAllProductsDisabled().subscribe({
      next: (data: Products[]) => {
        this.products.set(data);
      }
    })
  }

}
