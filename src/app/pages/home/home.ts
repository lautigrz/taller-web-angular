import { CardProducts } from './../../products/card-products/card-products';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';
import { Producto, Products } from '../../products/models/product.interface';
import { CartService } from '../../cart/data-access/cart.service';
import { ProductsService } from '../../products/data-access/products.service';

@Component({
  selector: 'app-home',
  imports: [CardProducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private prouctsService = inject(ProductsService)

  products : Products[] = []
  
 ngOnInit(): void {
  this.prouctsService.getAllProducts().subscribe({
    next: (data: Products[]) =>{
      this.products = data;
    },
    error:(err) =>{

    }
  })
}



  cartService = inject(CartService)


}
