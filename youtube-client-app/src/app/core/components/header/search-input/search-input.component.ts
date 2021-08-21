import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewInit {
  searchText?: string;

  @ViewChild('searchInput') inputElement?: ElementRef;

  constructor(public authService: AuthService, private youtubeService: YoutubeService) {}

  onClickClearButtonHandler() {
    this.searchText = '';
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.inputElement?.nativeElement, 'input')
      .pipe(
        debounceTime(700),
        map((event) => (event?.target as HTMLInputElement).value),
        filter((value) => value.length > 3),
      )
      .subscribe((value) => {
        const data$ = this.youtubeService.getData(value);
        data$.subscribe((data) => {
          this.youtubeService.cashedData = data;
        });
      });
  }
}
