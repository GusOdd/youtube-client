import { Component, Input, OnInit } from '@angular/core';

import { BorderBottomColorService } from 'src/app/youtube/services/border-bottom-color.service';
import { IVideoItem } from '../../../models/video-item';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  @Input() item?: IVideoItem;

  borderColor?: string;

  constructor(private borderBottomColorService: BorderBottomColorService) {}

  ngOnInit() {
    this.borderColor = this.borderBottomColorService.borderBottomColorPaint(
      this.item!.snippet.publishedAt,
    );
  }
}
