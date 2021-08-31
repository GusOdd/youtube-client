import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @ViewChild('searchInput') inputElement?: ElementRef;

  constructor(public authService: AuthService, public youtubeService: YoutubeService) {}

  onClickClearButtonHandler() {
    this.youtubeService.searchText = '';
  }

  search(term: string) {
    this.youtubeService.searchTerms.next(term);
  }

  ngOnInit() {
    this.youtubeService.cashedDataItems$ = this.youtubeService.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((value) => value.length > 3),
      switchMap((term: string) => this.youtubeService.getData(term)),
    );
  }
}
