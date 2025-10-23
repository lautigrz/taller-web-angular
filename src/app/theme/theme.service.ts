import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
   private darkModeKey = 'dark-mode';

  constructor() {
    const isDark = localStorage.getItem(this.darkModeKey) === 'true';
    this.setDarkMode(isDark);
  }

  toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(this.darkModeKey, isDark.toString());
  }

  setDarkMode(enable: boolean) {
    if (enable) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem(this.darkModeKey, enable.toString());
  }
}
