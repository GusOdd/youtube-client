import { Component } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-filtering-section',
  templateUrl: './filtering-section.component.html',
  styleUrls: ['./filtering-section.component.scss'],
})
export class FilteringSectionComponent {
  isSortingAscending = true;

  multiplication: number;

  constructor(private youtubeService: YoutubeService) {
    this.multiplication = this.isSortingAscending ? 1 : -1;
  }

  onInputFilteringSectionHandler(event: Event) {
    const eventTarget = event.target as HTMLInputElement;

    if (eventTarget.classList.contains('input-by-word')) {
      this.youtubeService.inputData = eventTarget.value.trim().toLowerCase();
    }
  }

  onClickFilteringSectionHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('sort-by-date-button')) {
      this.multiplication = this.isSortingAscending ? 1 : -1;

      this.youtubeService.cashedData!.items.sort(
        (a, b) =>
          this.multiplication *
          (+new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt)),
      );

      this.isSortingAscending = !this.isSortingAscending;
    }

    if (eventTarget.closest('button')?.classList.contains('sort-by-count-button')) {
      this.multiplication = this.isSortingAscending ? 1 : -1;

      this.youtubeService.cashedData!.items.sort(
        (a, b) => this.multiplication * (+a.statistics.viewCount - +b.statistics.viewCount),
      );

      this.isSortingAscending = !this.isSortingAscending;
    }
  }
}
