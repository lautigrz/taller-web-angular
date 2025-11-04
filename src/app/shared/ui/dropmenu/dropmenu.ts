import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../auth/data-acess/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dropmenu',
  imports: [Menu, ButtonModule],
  templateUrl: './dropmenu.html',
  styleUrl: './dropmenu.css'
})
export class Dropmenu implements OnInit {
  items: MenuItem[] | undefined;
  @ViewChild('menu') menu!: Menu;
  @Input() label: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);
  ngOnInit() {
    this.items = [
      {
        label: `Hola, ${this.label}`,
        items: [
          {
            label: 'Mis pedidos',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Cerrar sesion',
            icon: 'pi pi-upload',
            command: () => this.cerrarSesion()
          }
        ]
      }
    ];
  }
   abrirMenu(event: Event) {
    this.menu.toggle(event);
  }

  cerrarSesion(){
  
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Error al cerrar sesion:', err);
      }
    });
  }
}
