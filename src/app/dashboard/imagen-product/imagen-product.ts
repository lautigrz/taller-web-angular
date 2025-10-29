import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-imagen-product',

  imports: [ReactiveFormsModule],
  templateUrl: './imagen-product.html',
  styleUrl: './imagen-product.css'
})
export class ImagenProduct {
  @Input() form!: FormGroup;

  cantidadSelect = 0;
  isDragOver = false;
  
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.agregarArchivos(Array.from(input.files));
    }
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }


  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;

    if (event.dataTransfer?.files.length) {
      this.agregarArchivos(Array.from(event.dataTransfer.files));
    }
  }

  private agregarArchivos(nuevosFiles: File[]) {
    const archivosActuales: File[] = this.form.get('imagen')?.value || [];
    const archivosActualizados = [...archivosActuales, ...nuevosFiles];

    this.form.get('imagen')?.setValue(archivosActualizados);
    this.cantidadSelect = archivosActualizados.length;

    console.log(archivosActualizados)
  }
}
