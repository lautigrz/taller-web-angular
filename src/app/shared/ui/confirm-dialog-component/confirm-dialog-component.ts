import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-confirm-dialog-component',
  imports: [ConfirmDialogModule, ButtonModule, CommonModule, DialogModule],
  providers: [ConfirmationService],
  templateUrl: './confirm-dialog-component.html',
  styleUrl: './confirm-dialog-component.css'
})
export class ConfirmDialogComponent {

  @Input() header: string = '';
  @Input() message: string = '';
  @Input() icon: string = '';
  @Input() visible: boolean = false;
  @Input() esError: boolean = false;
  @Input() closeable: boolean = false;
  @Input() mostrarBoton = false;

  @Output() action = new EventEmitter<void>();

  constructor(private route: Router){}


  aceptar() {
    this.visible = false;
    this.action.emit();
    this.route.navigate(['/'])
  }

  cerrarDialog() {
    this.visible = false;
  }

}
