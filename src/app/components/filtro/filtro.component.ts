import { Component, EventEmitter, Output, HostListener, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { DrawerModule } from 'primeng/drawer';
import { Select } from 'primeng/select';
import { Liga } from '../../models/liga.interface';
import { Equipo } from '../products/models/product.interface';
import { FiltroService } from './data-access/filtro.service';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DrawerModule, Select],
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Output() productosFiltrados = new EventEmitter<any[]>();

  filtroForm: FormGroup;
  private filtroService = inject(FiltroService)
  visible2: boolean = false;

  liga: Liga[] = []
  equipo: Equipo[] = [];

  selectLiga: Liga | undefined;
  selectEquipo: Equipo | undefined;

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  sidebarVisible: boolean = true;
  isMobile: boolean = false;
  maximo = 120000;
  constructor(private fb: FormBuilder) {
    this.filtroForm = this.fb.group({
      deporte: ['futbol'],
      categoria: ['clubes'],
      liga: '',
      equipo: '',
      precio: [0]
    });


  }

  ngOnInit(): void {
    this.filtroService.obtenerLigas().subscribe({
      next: (liga: Liga[]) => {
        this.liga = liga;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ligaSelect() {
    const ligaId = this.filtroForm.get('liga')?.value;

    this.filtroService.obtenerEquipoDeUnaLiga(ligaId).subscribe({
      next: (data) => {
        this.equipo = data;

      },
      error: (err) => {
        console.log(err);
      }
    })
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


  get precioMax(): number {
    return this.filtroForm.get('precio')?.value ?? 200;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  submit(){
    console.log(this.filtroForm.value)
  }


}