import { Routes } from '@angular/router';
import { Payment } from '../../../pay/payment/payment'; // 👈 ruta corregida

const routes: Routes = [
  {
    path: '',
    component: Payment,
  },
];

export default routes;

