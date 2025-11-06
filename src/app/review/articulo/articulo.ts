import { Component, inject, Input, input } from '@angular/core';
import { Products } from '../../products/models/product.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/data-access/cart.service';

@Component({
  selector: 'app-articulo',
  imports: [CommonModule],
  templateUrl: './articulo.html',
  styleUrl: './articulo.css'
})
export class Articulo {
  @Input() size: 'small' | 'large' = 'large';
  product = input<Products>();

  private cartService = inject(CartService);

  constructor(){}

  getImageUrl(url: string) {
    return `http://localhost:3000${url}`
  }

  removeProduct(index: number) {
    console.log("asdsa");
    this.cartService.removeProduct(index);
    
  }
}
