import { Component } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-filtering-section',
  templateUrl: './filtering-section.component.html',
  styleUrls: ['./filtering-section.component.scss'],
})
export class FilteringSectionComponent {
  isSortingAscending = true;

  constructor(private youtubeService: YoutubeService) {}

  onInputFilteringSectionHandler(event: Event) {
    const eventTarget = event.target as HTMLInputElement;

    if (eventTarget.classList.contains('input-by-word')) {
      this.youtubeService.inputData = eventTarget.value.toLowerCase();
    }
  }

  onClickFilteringSectionHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('sort-by-date-button')) {
      if (this.isSortingAscending) {
        this.youtubeService.itemsData!.items.sort(
          (a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt),
        );
        this.isSortingAscending = false;
      } else {
        this.youtubeService.itemsData!.items.sort(
          (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt),
        );
        this.isSortingAscending = true;
      }
    }

    if (eventTarget.closest('button')?.classList.contains('sort-by-count-button')) {
      if (this.isSortingAscending) {
        this.youtubeService.itemsData!.items.sort(
          (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
        );
        this.isSortingAscending = false;
      } else {
        this.youtubeService.itemsData!.items.sort(
          (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
        );
        this.isSortingAscending = true;
      }
    }
  }
}
