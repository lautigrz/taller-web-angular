import { Component, inject, OnInit } from '@angular/core';
import { Payment } from '../../../pay/payment/payment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepsBarra } from "../../../shared/ui/steps-barra/steps-barra";
import { CartService } from '../../../cart/data-access/cart.service';
import { Envio } from '../models/envio';


@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule, FormsModule, StepsBarra],
  templateUrl: './pay.html',
  styleUrls: ['./pay.css']
})

export class Pay {
  payment = inject(Payment)
  cartService = inject(CartService);
  metodo: Envio = Envio.STANDARD;
  impuestos = 19.20;
  envio = 0.00;

  pasoActual = 1;
  paisSeleccionado: string = 'argentina';
  router = inject(Router);

  constructor() {

  }

  cambiarEnvio(metodo: string) {
    if (metodo in Envio) {
      this.metodo = Envio[metodo as keyof typeof Envio];
    }
    if (this.cartService.subTotal() > 100000 && this.metodo === Envio.STANDARD) {
      this.envio = 0;

    } else if (this.metodo === Envio.EXPRESS) {
      this.envio = 8000.00;


    } else {

      this.envio = 4500.00;
    }

    this.cartService.setMetodoEnvio(this.metodo);
  }

  get total(): number {
    const envioFinal = this.cartService.subTotal() >= 100000 && this.metodo === Envio.STANDARD ? 0 : this.envio;
    const total = this.cartService.subTotal() + this.impuestos + envioFinal;
    return total;
  }

  irAPago() {
    this.pasoActual = 2;
  }

  volverAEnvio() {
    this.pasoActual = 1;
  }

  confirmarPago() {

    this.router.navigate(["/review"]);

  }
}
