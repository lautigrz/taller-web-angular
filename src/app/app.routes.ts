import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './guars/auth-guards-guard';
import { Enable } from './pages/enable/enable';

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
  }, {
    path: 'enabled',
    component: Enable,
    canActivate: [authGuard],
    data: { roles: 'ADMIN' }
  },

  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay/pay.routes').then(m => m.default)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./pages/pay/thanks/thanks.routes').then(m => m.default)
  },
   {
    path: 'review',
    loadChildren: () => import('./pages/revision/revision.routes').then(m => m.default)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.routes').then(m => m.default)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
