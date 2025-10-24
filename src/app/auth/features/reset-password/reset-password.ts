import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabel } from 'primeng/floatlabel';
import { AuthService } from '../../data-acess/auth.service';
import { LoadingComponent } from '../../../shared/ui/loading-component/loading-component';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-reset-password',
  imports: [Dialog, ButtonModule, ReactiveFormsModule, 
    CommonModule, FloatLabel, LoadingComponent, Button],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})
export class ResetPassword {

  email: FormGroup;
  mensaje: string = '';
  esError: boolean = false;
  loading = false;
 
  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  private authService = inject(AuthService);
  constructor(private fb: FormBuilder) {
    this.email = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }


  onSubmit() {

    if(this.email.valid){
      
      this.loading = true;
      this.authService.resetPassword(this.email.value).subscribe({
        next: (data) =>{
          this.mensaje = data.message;
          this.esError = false;
          this.loading = false;
        },
        error: (error) => {

          this.mensaje = error.error.message ?? 'Ocurrio un error';
          this.esError = true;
          this.loading = false;
        }
      })

    }
  }

  cerrar() {
    this.mensaje = ""
    this.email.reset();
    this.onClose.emit();
  }

}
