import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchText?: string;

  constructor(public authService: AuthService) {}

  onClickClearButtonHandler() {
    this.searchText = '';
  }
}
