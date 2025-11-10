import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStateService } from '../core/data-access/auth-state.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authStateService = inject(AuthStateService);
  const router = inject(Router);
  const user = authStateService.user;
  const rolesPermitidos = route.data['roles'] as Array<string> | undefined;

  if (authStateService.isAuthenticated && rolesPermitidos?.includes(user?.rol || '')) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
