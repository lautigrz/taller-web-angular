import { Routes } from '@angular/router';
import { ImagenProduct } from './imagen-product/imagen-product';
import { FormProduct } from './form-product/form-product';



export default [
  {
    path: '',
    component: ImagenProduct
  },
  {
    path: '',
    component: FormProduct
  }
] as Routes;
