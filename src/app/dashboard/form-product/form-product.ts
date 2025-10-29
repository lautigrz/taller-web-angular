import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../data-access/dashboard.service';
import { Select } from 'primeng/select';
import { Liga } from '../models/liga.interface';
import { Equipo } from '../models/equipo.interface';
@Component({
  selector: 'app-form-product',
  imports: [ReactiveFormsModule, Select, FormsModule],
  templateUrl: './form-product.html',
  styleUrl: './form-product.css'
})
export class FormProduct implements OnInit {

  @Input() form!: FormGroup;
  private dashboardService = inject(DashboardService);

  liga: Liga[] = []
  equipo: Equipo[] = [];

  selectLiga: Liga | undefined;
  selectEquipo: Equipo | undefined;

  constructor() { }

  ngOnInit(): void {
    this.dashboardService.obtenerLigas().subscribe({
      next: (liga: Liga[]) => {
        this.liga = liga;
        console.log(liga);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  ligaSelect() {
    const ligaId = this.form.get('liga')?.value;

    this.dashboardService.obtenerEquipoDeUnaLiga(ligaId).subscribe({
      next: (data) => {
        this.equipo = data;
        console.log(data)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
