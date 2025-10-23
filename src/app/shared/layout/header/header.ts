import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Login } from '../../../auth/features/login/login';
import { AuthService } from '../../../auth/data-acess/auth.service';

@Component({
  selector: 'app-header',
  imports: [Navbar, Login],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  loginVisible = false;
  isLoggedIn = false;
  userName: string | null = '';

  constructor(private authService: AuthService) {
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
}
