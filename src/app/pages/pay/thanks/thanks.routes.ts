import { Routes } from '@angular/router';
import { Thanks } from './thanks';
import { Home } from '../../home/home';


export default [
  {
    path: '',
    component: Thanks,

  },
  {
    path: 'home',
    component: Home,
  }
] as Routes;
