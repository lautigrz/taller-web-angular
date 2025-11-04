import { Component, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Login } from '../../../auth/features/login/login';
import { ThemeService } from '../../../theme/theme.service';
import { AuthStateService, Usuario } from '../../../core/data-access/auth-state.service';
import { CartService } from '../../../cart/data-access/cart.service';
import { MenuItem } from 'primeng/api';

import { Dropmenu } from "../../ui/dropmenu/dropmenu";

@Component({
  selector: 'app-header',
  imports: [Navbar, Login, Dropmenu],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  loginVisible = false;
  isLoggedIn = false;
  isDark = false;
  userName: string | null = '';
  user: Usuario | null = null;
  items: MenuItem[] | undefined;
  @ViewChild(Dropmenu) dropmenu!: Dropmenu;
  @Output() openCart = new EventEmitter<void>();

  cartService = inject(CartService);
  constructor(private authState: AuthStateService, private themeService: ThemeService) {
    this.isDark = document.documentElement.classList.contains('dark');

    this.authState.isLoggedIn$.subscribe(isLogged => {
      this.isLoggedIn = isLogged;
    })
    this.authState.user$.subscribe(user => {
      this.userName = user?.name ?? '';
      this.user = user;
  
    });

    console.log(this.user);
  }

  handleUserMenuClick(event: Event) {

    if (this.isLoggedIn) {
      this.dropmenu.abrirMenu(event);
    } else {
      this.openLogin();
    }
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

  cerrarSesion() {

  }

}
