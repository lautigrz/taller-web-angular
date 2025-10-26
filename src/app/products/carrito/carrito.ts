import { Component, EventEmitter, Input, input, Output, Signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { Button } from '../../shared/ui/button/button';
@Component({
  selector: 'app-carrito',
  imports: [DrawerModule, Button],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
   @Input() visible: boolean = false;    
   @Output() visibleChange = new EventEmitter<boolean>();       
  
}
