import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { loadSearchResults } from 'src/app/store/actions';
import { IAppState } from '../../models/app-state';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(public youtubeService: YoutubeService, private store: Store<IAppState>) {
    this.youtubeService.cashedDataItems$ = this.store.select((state) => state.videoItems);
    this.youtubeService.customCards$ = this.store.select((state) => state.customCards);
  }

  ngOnInit() {
    this.youtubeService.searchTerms
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value.length > 3),
        tap((term: string) => {
          this.store.dispatch(loadSearchResults({ term }));
        }),
      )
      .subscribe();
  }
}
