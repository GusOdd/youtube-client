import { Component } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent {
  constructor(public youtubeService: YoutubeService) {}

  onClickBackHandler() {
    this.youtubeService.cashedItem$ = undefined;
  }
}
