import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  valueEmail?: string;

  valuePassword?: string;

  constructor(private authService: AuthService) {}

  onSubmit(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('login-button')) {
      event.preventDefault();
      if (this.valueEmail && this.valuePassword) {
        this.authService.logIn();
      }
    }
  }
}
