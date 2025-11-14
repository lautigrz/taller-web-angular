import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { Talla } from '../models/sizes.enum';
import { Products } from '../models/product.interface';

@Component({
  selector: 'app-size-selector',
  imports: [],
  templateUrl: './size-selector.html',
  styleUrl: './size-selector.css'
})
export class SizeSelector {
  tallas = Object.values(Talla);

  product = input<Products>();

  @Output() sizeSelect = new EventEmitter<{ productId: number; size: string }>();

  selectSize(productId: number | undefined, size: string) {
    if(productId === undefined) return
    this.sizeSelect.emit({ productId, size });
  }
}
