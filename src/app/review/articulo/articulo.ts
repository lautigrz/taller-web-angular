import { Component, input } from '@angular/core';
import { Products } from '../../products/models/product.interface';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.css'
})
export class Articulo {

  product = input<Products>();


    getImageUrl(url: string) {
    return `http://localhost:3000${url}`
  }
}
