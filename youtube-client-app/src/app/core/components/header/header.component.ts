import { Component } from '@angular/core';
import { FilteringSectionService } from 'src/app/youtube/services/filtering-section.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private filteringSectionService: FilteringSectionService,
    private youtubeService: YoutubeService,
  ) {}

  onClickSettingsButtonHandler() {
    this.filteringSectionService.isFilteringSectionDisplay =
      !this.filteringSectionService.isFilteringSectionDisplay;
  }

  onClickSearchInputHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('search-button')) {
      this.youtubeService.isSearchResultsDisplay = true;
    }
  }
}
