import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { LoginUser } from '../../models/auth.interface';
import { AuthService } from '../../data-acess/auth.service';
import { ResetPassword } from '../reset-password/reset-password';
import { LoadingComponent } from '../../../shared/ui/loading-component/loading-component';
import { RouterLink, RouterModule } from "@angular/router";
import { Button } from '../../../shared/ui/button/button';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [Dialog, Button, InputTextModule, FloatLabel, ReactiveFormsModule,
    CommonModule, ResetPassword, LoadingComponent, RouterLink, RouterModule,PasswordModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  mostrarModal: boolean = false;
  loading = false;
 

  private authService = inject(AuthService)
  mensajeError: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {

    if (this.loginForm.valid) {
      this.loading = true;
      const user: LoginUser = this.loginForm.value

      this.authService.login(user).subscribe({
        next: (user) => {
          this.visible = false;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          console.log(err)
      
        }
      })

    }
  }

  abrirModal(event: Event) {
    event.preventDefault();
    this.mostrarModal = true;
    this.visible = false;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }


}
