import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ISearchResultItem } from '../../models/search-result-item';
import { ISearchResults } from '../../models/search-results';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  data$: Observable<ISearchResults>;

  items?: ISearchResultItem[];

  constructor(public youtubeService: YoutubeService) {
    this.data$ = this.youtubeService.getData();
    this.data$.subscribe((data) => {
      this.items = data.items;
      this.youtubeService.cashedData = data;
    });
  }
}
