import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-carrousel-images',
  imports: [CarouselModule],
  templateUrl: './carrousel-images.html',
  styleUrl: './carrousel-images.css'
})
export class CarrouselImages {
  products: any[] | undefined;

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


    this.products = [
      {
        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuD-qSYHRfY1V5nRehL_esf-aybA6v3GB_wLNeX29A2AUIDlGUCHXYIzzwWp44XmpvYRQeJnfXjWMS6cBSuJtRu3jcfSTyboLJEysjTESeBt3daHbTQcWgLUsGLmNi2xbxjKUDJDQ4ONY3w-l1gTDUHuul6s41KmYUbubVz6vlrJbJEpkgAraPJjchcHsBTWbNJFh49ow3wY5nDKo-MVSnWdKEuqHyvQd4o-VTzSDeekJFEw8vWNmrZkM7oUIFY7aX5VwRaeJyHdGGk"
      },
       {
        image:"https://lh3.googleusercontent.com/aida-public/AB6AXuD-qSYHRfY1V5nRehL_esf-aybA6v3GB_wLNeX29A2AUIDlGUCHXYIzzwWp44XmpvYRQeJnfXjWMS6cBSuJtRu3jcfSTyboLJEysjTESeBt3daHbTQcWgLUsGLmNi2xbxjKUDJDQ4ONY3w-l1gTDUHuul6s41KmYUbubVz6vlrJbJEpkgAraPJjchcHsBTWbNJFh49ow3wY5nDKo-MVSnWdKEuqHyvQd4o-VTzSDeekJFEw8vWNmrZkM7oUIFY7aX5VwRaeJyHdGGk"
      }
    ]
  }
}
