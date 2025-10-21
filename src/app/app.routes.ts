import { Routes } from '@angular/router';
import { Navbar } from './shared/layout/navbar/navbar';

export const routes: Routes = [
    {
        path:'',
        component:Navbar
    },
    {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes').then(m => m.default),
  },
  { path: '**', redirectTo: 'auth/log-in' },
];
