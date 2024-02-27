import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isUserloggedIn()) {
    return true;
  } else {
    console.log('first here');
    router.navigate(['/login']);
    return false;
  }
};
