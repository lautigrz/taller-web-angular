import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  @Input() texto: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'cart' = 'primary';
  @Input() icon?: string; 
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
