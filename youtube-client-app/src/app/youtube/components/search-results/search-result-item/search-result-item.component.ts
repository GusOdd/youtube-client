import { Component, Input } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

import { IVideoItem } from '../../../models/video-item';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() item?: IVideoItem;

  constructor(private youtubeService: YoutubeService) {}

  onClickMoreHandler() {
    this.youtubeService.getItem(this.item?.id as string);
  }
}
