import { Routes } from '@angular/router';

export default [

  {
    path: 'sign-up',
    loadComponent: () => import('./register/register').then(m => m.Register),
  },
] as Routes;
