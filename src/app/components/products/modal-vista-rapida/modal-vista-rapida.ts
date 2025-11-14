import { Products } from './../models/product.interface';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CarrouselImages } from '../carrousel-images/carrousel-images';

@Component({
  selector: 'app-modal-vista-rapida',
  imports: [DialogModule, CarrouselImages],
  templateUrl: './modal-vista-rapida.html',
  styleUrl: './modal-vista-rapida.css'
})
export class ModalVistaRapida {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  producto = input<Products>();
  onClose() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
