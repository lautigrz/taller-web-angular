import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FiltroService } from './filtro.service';
import { Filter } from './models';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {

  @Output() productosFiltrados = new EventEmitter<any[]>();

  filtroForm: FormGroup;

  tallesDisponibles = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(private fb: FormBuilder, private filtroService: FiltroService) {
    this.filtroForm = this.fb.group({
      deporte: ['futbol'],
      categoria: ['clubes'],
      talles: [[]],
      precioMin: [0],
      precioMax: [200]
    });
  }

  aplicarFiltros() {
    const filtros: Filter = this.filtroForm.value;
    this.filtroService.filtrarProductos(filtros).subscribe(data => {
      this.productosFiltrados.emit(data);
    });
  }

  limpiarFiltros() {
    this.filtroForm.reset({
      deporte: '',
      categoria: '',
      talles: [],
      precioMin: 0,
      precioMax: 200
    });
  }

  toggleTalle(talle: string) {
    const talles = this.filtroForm.value.talles as string[];
    if (talles.includes(talle)) {
      this.filtroForm.patchValue({ talles: talles.filter(t => t !== talle) });
    } else {
      this.filtroForm.patchValue({ talles: [...talles, talle] });
    }
  }
}