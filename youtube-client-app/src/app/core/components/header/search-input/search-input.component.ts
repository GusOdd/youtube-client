import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatAll, debounceTime, filter, map } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('searchInput') inputElement?: ElementRef;

  constructor(public authService: AuthService, public youtubeService: YoutubeService) {}

  onClickClearButtonHandler() {
    this.youtubeService.searchText = '';
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.inputElement?.nativeElement, 'input')
      .pipe(
        debounceTime(700),
        map((event) => (event?.target as HTMLInputElement).value),
        filter((value) => value.length > 3),
        map((value) => this.youtubeService.getData(value)),
        concatAll(),
      )
      .subscribe((data) => {
        this.youtubeService.cashedData = data;
      });
  }
}
