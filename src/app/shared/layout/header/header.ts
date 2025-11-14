import { Component, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Login } from '../../../auth/features/login/login';
import { ThemeService } from '../../../theme/theme.service';
import { AuthStateService, Usuario } from '../../../core/data-access/auth-state.service';

import { MenuItem } from 'primeng/api';

import { Dropmenu } from "../../ui/dropmenu/dropmenu";
import { UiService } from '../../data-access/ui.service';
import { CartService } from '../../../components/cart/data-access/cart.service';

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
  private uiService = inject(UiService)

  constructor(private authState: AuthStateService, private themeService: ThemeService) {
    this.isDark = document.documentElement.classList.contains('dark');

    this.authState.isLoggedIn$.subscribe(isLogged => {
      this.isLoggedIn = isLogged;
    })
    this.authState.user$.subscribe(user => {
      this.userName = user?.name ?? '';
      this.user = user;
      this.loginVisible = false;

    });
    this.uiService.loginVisible$.subscribe(visible => {
      this.loginVisible = visible;
    });

    console.log(this.user);
  }

  handleUserMenuClick(event: Event) {

    if (this.isLoggedIn) {
      this.dropmenu.rol = this.user?.rol ?? '';
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


}
