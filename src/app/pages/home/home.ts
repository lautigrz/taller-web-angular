import { CardProducts } from './../../products/card-products/card-products';
import { Component } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [CardProducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
