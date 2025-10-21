import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { LoginUser } from '../../models/auth.interface';
import { AuthService } from '../../data-acess/auth.service';

@Component({
  selector: 'app-login',
  imports: [Dialog, ButtonModule, InputTextModule, FloatLabel, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

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

      const user: LoginUser = this.loginForm.value

      this.authService.login(user).subscribe({
        next: (user) => {
          this.visible = false;
        },
        error: (err) => {
          console.log(err)
          this.mensajeError = err.error
        }
      })

    }
  }

 
}
