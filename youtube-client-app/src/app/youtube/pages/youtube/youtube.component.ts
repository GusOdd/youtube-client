import { Component } from '@angular/core';

import { FilteringSectionService } from '../../services/filtering-section.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  constructor(
    public filteringSectionService: FilteringSectionService,
    private youtubeService: YoutubeService,
  ) {
    const displaySection = async () => {
      await this.youtubeService.getDataFromFile();
    };

    displaySection();
  }
}
