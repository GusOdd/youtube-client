import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FAKE_TOKEN_NAME } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  logIn() {
    localStorage.setItem(FAKE_TOKEN_NAME, 'absoluteFake');
    this.router.navigate(['/results']);
  }

  logOut() {
    localStorage.removeItem(FAKE_TOKEN_NAME);
    this.router.navigate(['/auth']);
  }
}
