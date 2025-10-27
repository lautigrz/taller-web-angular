import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { ModalVistaRapida } from '../modal-vista-rapida/modal-vista-rapida';
import { Producto, Products } from '../models/product.interface';


@Component({
  selector: 'app-card-products',
  imports: [Button, ModalVistaRapida],
  templateUrl: './card-products.html',
  styleUrl: './card-products.css'
})
export class CardProducts {

  quickViewVisible = false;

  producto = input<Products>();

  addProduct = output<Products>();

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

    getImagenPrincipal(): string {
  return this.producto()?.imagenes?.[0]?.url 
         ? `http://localhost:3000${this.producto()?.imagenes[0].url}`
         : '/assets/placeholder.png';
}


}
