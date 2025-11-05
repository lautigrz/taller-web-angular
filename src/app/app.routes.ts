import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes').then(m => m.default),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.default)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay/pay.routes').then(m => m.default)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./pages/pay/thanks/thanks.routes').then(m => m.default)
  },
  { path: '**', redirectTo: 'auth/log-in' },
];
