import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taller-web-ii');
   constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
