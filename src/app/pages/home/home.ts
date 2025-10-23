import { Component } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
