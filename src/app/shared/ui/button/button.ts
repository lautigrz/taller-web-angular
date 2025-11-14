import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  @Input() texto: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'cart' | 'delete' = 'primary';
  @Input() icon?: string;
  @Input() type?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() clickEvent = new EventEmitter<void>();
  handleClick() {
    if (this.clickEvent.observers.length > 0) {
      this.clickEvent.emit();
    }
  }
}


