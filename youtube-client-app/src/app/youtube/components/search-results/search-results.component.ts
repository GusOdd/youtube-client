import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IVideoItem } from '../../models/video-item';
import { IVideoResults } from '../../models/video-results';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  data$: Observable<IVideoResults>;

  items?: IVideoItem[];

  constructor(public youtubeService: YoutubeService) {
    this.data$ = this.youtubeService.getData('angular');
    this.data$.subscribe((data) => {
      this.items = data.items;
      this.youtubeService.cashedData = data;
    });
  }
}
