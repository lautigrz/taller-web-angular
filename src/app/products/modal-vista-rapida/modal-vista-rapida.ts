import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal-vista-rapida',
  imports: [DialogModule],
  templateUrl: './modal-vista-rapida.html',
  styleUrl: './modal-vista-rapida.css'
})
export class ModalVistaRapida {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onClose() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
