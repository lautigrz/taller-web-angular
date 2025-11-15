import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Imagene } from '../models/product.interface';
@Component({
  selector: 'app-carrousel-images',
  imports: [CarouselModule],
  templateUrl: './carrousel-images.html',
  styleUrl: './carrousel-images.css'
})
export class CarrouselImages{
   products: any[] | undefined;

   @Input() imagenes: Imagene[] = [];

  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getImageUrl(url: string){
    return `http://localhost:3000${url}`
  }
}
