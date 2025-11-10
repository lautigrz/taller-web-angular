import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FiltroService } from './filtro.service';
import { Filter } from './models';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  @Output() productosFiltrados = new EventEmitter<any[]>();

  filtroForm: FormGroup;
  tallesDisponibles = ['S', 'M', 'L', 'XL', 'XXL'];

  sidebarVisible: boolean = true;
  isMobile: boolean = false;

  constructor(private fb: FormBuilder, private filtroService: FiltroService) {
    this.filtroForm = this.fb.group({
      deporte: ['futbol'],
      categoria: ['clubes'],
      talles: [[]],
      precioMin: [0],
      precioMax: [200]
    });

    this.checkScreenSize();
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

  get precioMax(): number {
    return this.filtroForm.get('precioMax')?.value ?? 200;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 900;
    this.sidebarVisible = !this.isMobile;
  }
}