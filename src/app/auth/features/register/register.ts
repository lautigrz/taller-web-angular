import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../data-acess/auth.service';
import { RegisterUser } from '../../models/auth.interface';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, ButtonModule,
    InputTextModule, FloatLabel, PasswordModule, ProgressSpinnerModule,
    ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  ocurrioError = false;
  private confirmationService = inject(ConfirmationService)
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

    let header = ""
    let message = ""
    let icon = ""



    if (this.registerForm.valid) {
      this.loading = true;
      const data: RegisterUser = this.registerForm.value;

      this.authService.register(data).subscribe({
        next: (user) => {
          this.loading = false;
          this.ocurrioError = false;
          const userName = user.name;
           header = "Registro exitoso"
           message = `¡Hola ${userName}, te has registrado correctamente!`
           icon = "fa-solid fa-circle-check"
          const esLogin = true

            this.messageInformation(header,message,icon,esLogin)
        },
        error: (err) => {
          this.loading = false;
          this.ocurrioError = true;
          header = "Ocurrio un error."
          message = `${err.error.message}`
          icon = "fa-solid fa-circle-exclamation"
          this.messageInformation(header,message,icon,false)
        }
      })

    }
  }

  get f() {
    return this.registerForm.controls;
  }

  messageInformation(header: string, message: string, icon: string, esLogin: boolean) {
    this.confirmationService.confirm({
      header: `${header}`,
      message: `${message}`,
      icon: `${icon}`,

      rejectButtonProps: {
        visible: false
      },

      acceptButtonProps: {
        label: 'Ir al login',
      },

      accept: () => {


      },
    });
  }



}