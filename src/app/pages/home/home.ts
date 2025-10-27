import { CardProducts } from './../../products/card-products/card-products';
import { Component, inject } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';
import { Producto } from '../../products/models/product.interface';
import { CartService } from '../../cart/data-access/cart.service';

@Component({
  selector: 'app-home',
  imports: [CardProducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  productos: Producto[] = [
    {
      nombre: 'Camiseta FC Barcelona 23/24',
      descripcion: 'Camiseta titular oficial del FC Barcelona, edición 2023/24.',
      precio: 129.99,
      stock: 25,
      imagenUrl: 'https://example.com/images/barcelona-23-24.jpg'
    },
    {
      nombre: 'Camiseta Real Madrid 23/24',
      descripcion: 'Camiseta titular oficial del Real Madrid, edición 2023/24.',
      precio: 129.99,
      stock: 30,
      imagenUrl: 'https://example.com/images/real-madrid-23-24.jpg'
    },
    {
      nombre: 'Camiseta Manchester United 23/24',
      descripcion: 'Camiseta titular oficial del Manchester United, edición 2023/24.',
      precio: 124.99,
      stock: 20,
      imagenUrl: 'https://example.com/images/manchester-united-23-24.jpg'
    },
    {
      nombre: 'Camiseta Bayern Múnich 23/24',
      descripcion: 'Camiseta titular oficial del Bayern Múnich, edición 2023/24.',
      precio: 127.99,
      stock: 15,
      imagenUrl: 'https://example.com/images/bayern-23-24.jpg'
    },
    {
      nombre: 'Camiseta Juventus 23/24',
      descripcion: 'Camiseta titular oficial de la Juventus, edición 2023/24.',
      precio: 122.99,
      stock: 18,
      imagenUrl: 'https://example.com/images/juventus-23-24.jpg'
    },
    {
      nombre: 'Camiseta PSG 23/24',
      descripcion: 'Camiseta titular oficial del Paris Saint-Germain, edición 2023/24.',
      precio: 125.99,
      stock: 22,
      imagenUrl: 'https://example.com/images/psg-23-24.jpg'
    },
    {
      nombre: 'Camiseta Liverpool 23/24',
      descripcion: 'Camiseta titular oficial del Liverpool FC, edición 2023/24.',
      precio: 128.99,
      stock: 27,
      imagenUrl: 'https://example.com/images/liverpool-23-24.jpg'
    },
    {
      nombre: 'Camiseta AC Milan 23/24',
      descripcion: 'Camiseta titular oficial del AC Milan, edición 2023/24.',
      precio: 121.99,
      stock: 19,
      imagenUrl: 'https://example.com/images/ac-milan-23-24.jpg'
    }


  ]

  cartService = inject(CartService)
}
