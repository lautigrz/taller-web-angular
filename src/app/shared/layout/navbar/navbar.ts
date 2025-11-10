import { Component, inject, Input } from '@angular/core';

import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Input() rol: string = '';
  @Input() isLoggedIn: boolean = false;

}
