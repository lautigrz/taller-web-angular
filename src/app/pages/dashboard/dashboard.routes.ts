import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { authGuard } from '../../guars/auth-guards-guard';


export default [
  {
    path: '',
    component: Dashboard,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] }
  }
] as Routes;
