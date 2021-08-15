import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISearchResultItem } from '../../models/search-result-item';
import { BorderBottomColorService } from '../../services/border-bottom-color.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  item?: ISearchResultItem;

  photo?: string;

  borderColor?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeService,
    private borderBottomColorService: BorderBottomColorService,
  ) {
    if (!this.youtubeService.cashedData) {
      const data$ = this.youtubeService.getData();

      data$.subscribe((data) => {
        this.youtubeService.cashedData = data;

        this.getItemData();
      });
    } else {
      this.getItemData();
    }
  }

  getItemData() {
    this.item = this.youtubeService.cashedData?.items.find((item) => {
      return item.id === this.activatedRoute.snapshot.params.id;
    });

    this.photo = `url(${this.item?.snippet.thumbnails.maxres.url})`;
  }

  ngOnInit() {
    this.borderColor = this.borderBottomColorService.borderBottomColorPaint(
      this.item!.snippet.publishedAt,
    );
  }
}
