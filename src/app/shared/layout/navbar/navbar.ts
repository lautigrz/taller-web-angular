import { Component } from '@angular/core';
import { AuthService } from '../../../auth/data-acess/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isLoggedIn = false;
  userName : string | null = '';
  mobileMenuVisible: boolean = false;

  constructor(private authService: AuthService) {
 
  }


}
