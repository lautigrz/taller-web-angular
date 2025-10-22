import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../data-acess/auth.service';
import { RegisterUser } from '../../models/auth.interface';
import { ConfirmDialogComponent } from "../../../shared/ui/confirm-dialog-component/confirm-dialog-component";
import { LoadingComponent } from '../../../shared/ui/loading-component/loading-component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, ButtonModule,
    InputTextModule, FloatLabel, PasswordModule
    ,ConfirmDialogComponent, LoadingComponent],

  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm: FormGroup;
  
  submitted = false;
  loading = false;
  ocurrioError = false;
  dialogVisible = false;
  dialogHeader = '';
  dialogMessage = '';
  dialogIcon = '';

  private authService = inject(AuthService)

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { mismatch: true };
  }

  onSubmit() {
    this.dialogVisible = false;
    
    if (this.registerForm.valid) {
      this.loading = true;
      const data: RegisterUser = this.registerForm.value;

      this.authService.register(data).subscribe({
        next: (user) => {
          const userName = user.name;
          this.loading = false;
          this.ocurrioError = false;
          this.dialogHeader = "Registro exitoso"
          this.dialogMessage = `¡Hola ${userName}, te has registrado correctamente!`
          this.dialogIcon = "fa-solid fa-circle-check"
          this.dialogVisible = true;

        },
        error: (err) => {
          this.loading = false;
          this.ocurrioError = true;
          this.dialogHeader = "Ocurrio un error."
          this.dialogMessage = `${err.error.message}`
          this.dialogIcon = "fa-solid fa-circle-exclamation"
          this.dialogVisible = true;
        }
      })

    }
  }

  get f() {
    return this.registerForm.controls;
  }


}