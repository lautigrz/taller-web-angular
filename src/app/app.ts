import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme/theme.service';

import { AuthService } from './auth/data-acess/auth.service';
import { Carrito } from './products/carrito/carrito';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carrito, Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taller-web-ii');
  cartVisible: boolean = false;

  constructor(private themeService: ThemeService, private authService: AuthService) {
    this.authService.verifyState().subscribe({
      next: user => {
        console.log('Usuario verificado:');
      },
      error: err => {
        console.log('No hay sesión activa:');
      }
    });

  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
    toggleCart() {
      this.cartVisible = !this.cartVisible;
      console.log(this.cartVisible)
  }
}
