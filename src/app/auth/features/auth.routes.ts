import { Routes } from '@angular/router';

export default [

  {
    path: 'sign-up',
    loadComponent: () => import('./register/register').then(m => m.Register),
  },
  {
    path:'reset-password',
    loadComponent: () => import('./update-password/update-password').then(m => m.UpdatePassword)
  }
] as Routes;
