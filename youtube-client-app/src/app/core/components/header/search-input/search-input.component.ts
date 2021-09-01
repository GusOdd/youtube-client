import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  constructor(public authService: AuthService, public youtubeService: YoutubeService) {}

  onClickClearButtonHandler() {
    this.youtubeService.searchText = '';
  }

  search(term: string) {
    this.youtubeService.searchTerms.next(term);
  }
}
