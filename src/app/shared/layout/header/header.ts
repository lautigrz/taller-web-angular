import { Component, EventEmitter, Output } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Login } from '../../../auth/features/login/login';
import { ThemeService } from '../../../theme/theme.service';
import { AuthStateService } from '../../../core/data-access/auth-state.service';


@Component({
  selector: 'app-header',
  imports: [Navbar, Login],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  loginVisible = false;
  isLoggedIn = false;
  isDark = false;
  userName: string | null = '';
  @Output() openCart = new EventEmitter<void>();

  constructor(private authState: AuthStateService, private themeService: ThemeService) {
    this.isDark = document.documentElement.classList.contains('dark');

    this.authState.isLoggedIn$.subscribe(isLogged => {
      this.isLoggedIn = isLogged;
    })
    this.authState.user$.subscribe(user => {
      this.userName = user?.name ?? '';
    });
  }

  openLogin() {

    this.loginVisible = true;

  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.isDark = !this.isDark;
  }

   onCartClick() {

    this.openCart.emit();
  }

}
