import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('Poli-Test-loguin')){
    return true
  }
  return false;
};
