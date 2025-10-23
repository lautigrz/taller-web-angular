import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Login } from '../../../auth/features/login/login';
import { AuthService } from '../../../auth/data-acess/auth.service';
import { Footer } from '../footer/footer';
import { ThemeService } from '../../../theme/theme.service';


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

  constructor(private authService: AuthService, private themeService: ThemeService) {
    this.isDark = document.documentElement.classList.contains('dark');
    this.authService.isLoggedIn$.subscribe(logged => {
      console.log("esta logeado", logged)
      this.isLoggedIn = logged;
      if (logged) this.userName = this.authService.getName();
    });
  }

  openLogin() {
    console.log(this.loginVisible)
    this.loginVisible = true;

    console.log(this.loginVisible)
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.isDark = !this.isDark;
  }
}
