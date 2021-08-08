import { Component } from '@angular/core';

import { FilteringSectionService } from './youtube/services/filtering-section.service';
import { YoutubeService } from './youtube/services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Youtube Client App';

  constructor(
    public filteringSectionService: FilteringSectionService,
    public youtubeService: YoutubeService,
  ) {}
}
