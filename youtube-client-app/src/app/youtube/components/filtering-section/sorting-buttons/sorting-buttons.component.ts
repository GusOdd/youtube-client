import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-sorting-buttons',
  templateUrl: './sorting-buttons.component.html',
  styleUrls: ['./sorting-buttons.component.scss'],
})
export class SortingButtonsComponent {
  constructor(private youtubeService: YoutubeService) {}

  onClickDateHandler() {
    this.youtubeService.typeOfSorting = 'date';

    this.youtubeService.isSortingAscending = !this.youtubeService.isSortingAscending;
  }

  onClickCountHandler() {
    this.youtubeService.typeOfSorting = 'count';

    this.youtubeService.isSortingAscending = !this.youtubeService.isSortingAscending;
  }
}
