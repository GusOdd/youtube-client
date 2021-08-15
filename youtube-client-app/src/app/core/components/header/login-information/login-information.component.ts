import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.scss'],
})
export class LoginInformationComponent {
  constructor(public authService: AuthService) {}
}
