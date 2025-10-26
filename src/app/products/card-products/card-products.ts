import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { ModalVistaRapida } from '../modal-vista-rapida/modal-vista-rapida';

@Component({
  selector: 'app-card-products',
  imports: [Button, ModalVistaRapida],
  templateUrl: './card-products.html',
  styleUrl: './card-products.css'
})
export class CardProducts {

 quickViewVisible = false;


  openQuickView() {
   
    this.quickViewVisible = true;
  }

  closeQuickView() {
    this.quickViewVisible = false;
  
  }

}
