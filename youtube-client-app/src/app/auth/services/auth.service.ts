import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FAKE_TOKEN_NAME } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth$: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.isAuth$ = new BehaviorSubject<boolean>(!!localStorage.getItem(FAKE_TOKEN_NAME));
  }

  logIn() {
    localStorage.setItem(FAKE_TOKEN_NAME, 'absoluteFake');
    this.router.navigate(['/results']);
    this.isAuth$.next(true);
  }

  logOut() {
    localStorage.removeItem(FAKE_TOKEN_NAME);
    this.router.navigate(['/auth']);
    this.isAuth$.next(false);
  }
}
