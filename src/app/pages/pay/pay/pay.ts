import { Component, inject, OnInit } from '@angular/core';
import { Payment } from '../../../pay/payment/payment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepsBarra } from "../../../shared/ui/steps-barra/steps-barra";

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule, FormsModule, StepsBarra],
  templateUrl: './pay.html',
  styleUrls: ['./pay.css']
})

export class Pay implements OnInit {
  payment = inject(Payment)
  carrito: any = { productos: [], subTotal: 0 };
  impuestos = 19.20;
  envio = 0.00;
  pasoActual = 1;
  paisSeleccionado: string = 'argentina';
  router = inject(Router);

  constructor() {
    console.log('✅ Pay component cargado');
  }

  ngOnInit() {
    const data = sessionStorage.getItem('carrito');
    if (data) {
      this.carrito = JSON.parse(data);
    }
  }

  get subtotal(): number {
    return this.carrito.subTotal;
  }

  cambiarEnvio(metodo: string) {
    if (metodo === 'express') {
      this.envio = 15.00;
    } else {
      this.envio = this.subtotal > 50 ? 0.00 : 5.00;
    }
  }

  get total(): number {
    const envioFinal = this.subtotal >= 50 ? 0 : this.envio;
    return this.subtotal + this.impuestos + envioFinal;
  }

  irAPago() {
    this.pasoActual = 2;
  }

  volverAEnvio() {
    this.pasoActual = 1;
  }

  confirmarPago() {
    this.router.navigate(["/thanks"]);
    sessionStorage.removeItem('carrito');
  }
}
