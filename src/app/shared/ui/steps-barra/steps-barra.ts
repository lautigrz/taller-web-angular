import { Component, input } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-steps-barra',
  imports: [StepperModule, ButtonModule, FormsModule],
  templateUrl: './steps-barra.html',
  styleUrl: './steps-barra.css'
})
export class StepsBarra {
  activateStep = input<number>(1);
}
