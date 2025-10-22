import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../data-acess/auth.service';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { LoadingComponent } from '../../../shared/ui/loading-component/loading-component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog-component/confirm-dialog-component';
import { UpdatePasswordUser } from '../../models/auth.interface';

@Component({
  selector: 'app-update-password',
  imports: [ReactiveFormsModule, CommonModule, FloatLabel,
    PasswordModule, ButtonModule, ConfirmDialogComponent, LoadingComponent],
  templateUrl: './update-password.html',
  styleUrl: './update-password.css'
})
export class UpdatePassword implements OnInit {

  token!: string;
  mensajeError = '';
  loading = false;

  ocurrioError = false;
  dialogVisible = false;
  dialogHeader = '';
  dialogMessage = '';
  dialogIcon = '';
  mostrarBoton = false;
 
  private authService = inject(AuthService)

  updatePassword: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.updatePassword = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator })
  }


  passwordMatchValidator(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { mismatch: true };
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token')!;

    this.authService.verificarTokenDeCambioDeContraseña(this.token).subscribe({
      next: () => {

      },
      error: () => {
        console.log("error")
        this.ocurrioError = true;
        this.dialogVisible = true;
        this.dialogHeader = "Ocurrio un error"
        this.dialogMessage = "No tiene autroizacion para ejercer esta accion."
        this.dialogIcon = "fa-solid fa-circle-exclamation"

      }
    })

  }

  onSubmit() {

    if (this.updatePassword.valid) {

      this.loading = true;
      const password = this.updatePassword.get('password')?.value;
      const confirmPassword = this.updatePassword.get('confirmPassword')?.value;

      const updatePassword: UpdatePasswordUser = {
        newPassword: password,
        confirmPassword: confirmPassword,
        token: this.token
      };

      this.authService.updatePassword(updatePassword).subscribe({
        next: () => {
          
          this.loading = false;
          this.ocurrioError = false;
          this.dialogVisible = true;
          this.dialogHeader = "Cambio de contraseña exitoso!"
          this.dialogMessage = "Listo para iniciar sesion!"
          this.dialogIcon = "fa-solid fa-circle-check"
          this.mostrarBoton = true;
      
        },
        error: (err) => {
          this.loading = false;
          this.ocurrioError = true;
          this.dialogVisible = true;
          this.dialogHeader = "Ocurrio un error"
          this.dialogMessage = `${err.message}`
          this.dialogIcon = "fa-solid fa-circle-exclamation"
          this.mostrarBoton = true;
        }
      })

    }


  }


}

