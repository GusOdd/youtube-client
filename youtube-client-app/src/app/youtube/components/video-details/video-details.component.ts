import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IVideoItem } from '../../models/video-item';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent {
  item?: IVideoItem;

  photo?: string;

  constructor(private activatedRoute: ActivatedRoute, private youtubeService: YoutubeService) {
    const data$ = this.youtubeService.getItem(this.activatedRoute.snapshot.params.id);

    data$.subscribe((item) => {
      this.youtubeService.cashedItem = item;

      this.item = this.youtubeService.cashedItem?.items.find((item) => {
        return item.id === this.activatedRoute.snapshot.params.id;
      });

      this.photo = `url(${this.item?.snippet.thumbnails.high.url})`;
    });
  }
}
