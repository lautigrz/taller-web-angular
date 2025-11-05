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
  @Input() rol : string = '';
  private authService = inject(AuthService);
  private router = inject(Router);
ngOnInit() {
  if (this.rol === 'ADMIN') {
    this.items = [
      {
        label: `Hola, ${this.label}`,
        items: [
          {
            label: 'Lista de productos',
            icon: 'pi pi-chart-bar',
            command: () => this.router.navigate([''])
          },
          {
            label: 'Nuevo producto',
            icon: 'pi pi-chart-bar',
            command: () => this.router.navigate(['/dashboard'])
          },
          {
            label: 'Habilitar productos',
            icon: 'pi pi-check-circle',
            command: () => this.router.navigate(['/enabled'])
          },
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-sign-out',
            command: () => this.cerrarSesion()
          }
        ]
      }
    ];
  } else {
    // Usuario cliente
    this.items = [
      {
        label: `Hola, ${this.label}`,
        items: [
          {
            label: 'Mis pedidos',
            icon: 'pi pi-shopping-bag',
            command: () => this.router.navigate(['/mis-pedidos'])
          },
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-sign-out',
            command: () => this.cerrarSesion()
          }
        ]
      }
    ];
  }
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
