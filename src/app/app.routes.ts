import { Routes } from '@angular/router';
import { Navbar } from './shared/layout/navbar/navbar';
import { Header } from './shared/layout/header/header';

export const routes: Routes = [
    {
        path:'',
        component:Header
    },
    {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes').then(m => m.default),
  },
  { path: '**', redirectTo: 'auth/log-in' },
];
