import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme/theme.service';

import { AuthService } from './auth/data-acess/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taller-web-ii');
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
}
