import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FAKE_TOKEN_NAME } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (!localStorage.getItem(FAKE_TOKEN_NAME)) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
