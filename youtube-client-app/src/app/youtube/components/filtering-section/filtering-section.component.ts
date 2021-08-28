import { Component } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-filtering-section',
  templateUrl: './filtering-section.component.html',
  styleUrls: ['./filtering-section.component.scss'],
})
export class FilteringSectionComponent {
  isSortingAscending: boolean = true;

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
}
