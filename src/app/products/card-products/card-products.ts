import { FormsModule } from '@angular/forms';
import { Component, input, output} from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { ModalVistaRapida } from '../modal-vista-rapida/modal-vista-rapida';
import { Products } from '../models/product.interface';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SizeSelector } from '../size-selector/size-selector';


@Component({
  selector: 'app-card-products',
  imports: [Button, ModalVistaRapida, Toast, FormsModule, SizeSelector],
  providers: [MessageService],
  templateUrl: './card-products.html',
  styleUrl: './card-products.css'
})
export class CardProducts {

  quickViewVisible = false;

  producto = input<Products>();
  deshabilitarProduct = output<Products>();
  modoHabilitar = input<boolean>(false);
  isLoggedIn = input<boolean>(false);
  habilitarProduct = output<Products>();
  addProduct = output<Products>();
  selectedSize = new Map<number, string>();

  rol = input<string>();
  
  constructor(private messageService: MessageService) { }
  showSuccess(messgae: string, severity: string, summary: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: messgae, key: 'br', life: 3000 });
  }
  openQuickView() {

    this.quickViewVisible = true;
  }

  closeQuickView() {
    this.quickViewVisible = false;

  }

  onSizeChange(event: { productId: number, size: string }) {
    console.log(event.productId, event.size)
    this.selectedSize.set(event.productId, event.size);
  }

  onAgregar() {

    const prod = this.producto();
    if(!prod) return 
    
    const size = this.selectedSize.get(prod?.id);
    if (prod && size) {
      prod.talla = size
      this.addProduct.emit(prod);
      this.showSuccess(prod.titulo,'success',"Producto agregado");
      console.log(this.selectedSize, prod)
    } else {
       this.showSuccess("Debe elegir talla",'warn',"Error");
     
    }
  }

  getImagenPrincipal(): string {
    return this.producto()?.imagenes?.[0]?.url
      ? `http://localhost:3000${this.producto()?.imagenes[0].url}`
      : '/assets/placeholder.png';
  }

  onDeshabilitar(){
    const producto = this.producto();
    if(!producto) return

    this.deshabilitarProduct.emit(producto);
  }

    onHabilitar(){
    const producto = this.producto();
    if(!producto) return

    this.habilitarProduct.emit(producto);
  }


}
