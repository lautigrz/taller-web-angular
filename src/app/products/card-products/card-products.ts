import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { ModalVistaRapida } from '../modal-vista-rapida/modal-vista-rapida';
import { Producto } from '../models/product.interface';


@Component({
  selector: 'app-card-products',
  imports: [Button, ModalVistaRapida],
  templateUrl: './card-products.html',
  styleUrl: './card-products.css'
})
export class CardProducts {

  quickViewVisible = false;

  producto = input<Producto>();

  addProduct = output<Producto>();

  openQuickView() {

    this.quickViewVisible = true;
  }

  closeQuickView() {
    this.quickViewVisible = false;

  }

  onAgregar() {

    const prod = this.producto();
    if (prod) {
      this.addProduct.emit(prod);
    }
  }


}
