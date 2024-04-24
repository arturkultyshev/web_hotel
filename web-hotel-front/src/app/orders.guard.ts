import { CanActivateFn } from '@angular/router';

export const ordersGuard: CanActivateFn = (route, state) => {
  return true;
};
