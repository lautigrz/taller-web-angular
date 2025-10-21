import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Login } from '../../../auth/features/login/login';
import { AuthService } from '../../../auth/data-acess/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, Login],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  loginVisible = false;
  isLoggedIn = false;
  userName : string | null = '';
  mobileMenuVisible: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(logged => {
      console.log("esta logeado",logged)
      this.isLoggedIn = logged;
      if (logged) this.userName = this.authService.getName();
    });
  }

  openLogin() {
    console.log(this.loginVisible)
    this.loginVisible = true;
    this.mobileMenuVisible = false;
    console.log(this.loginVisible)
  }
  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
