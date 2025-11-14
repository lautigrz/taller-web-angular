import { inject, Injectable, signal } from '@angular/core';
import { Data, Products } from '../../components/products/models/product.interface';
import { ProductsService } from '../../components/products/data-access/products.service';


@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  products = signal<Products[]>([]);
  totalProducts = signal(0);
  loading = signal(false)
  private productService = inject(ProductsService);

  constructor() { }

  loadProducts(page: number = 1, limit: number = 12, filtros: any = {}) {
    this.loading.set(true);
    this.productService.getAllProducts(page, limit, filtros).subscribe({
      next: (data: Data) => {
        this.products.set(data.data);
        this.totalProducts.set(data.meta.total);
        this.loading.set(false);

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, error: (err) => {

        console.error(err),

          this.loading.set(false)

      },
      
        
      complete: () => this.loading.set(false)
    })
  }
  addProduct(newProduct: Products) {

    this.products.update((current) => [newProduct, ...current]);
  }

  loadProductsDisabled() {
    this.productService.getAllProductsDisabled().subscribe({
      next: (data: Products[]) => {
        this.products.set(data);
      }
    })
  }

}
