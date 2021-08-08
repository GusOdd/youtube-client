import { Component } from '@angular/core';
import { ISearchResults } from '../../models/search-results';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  itemsData?: ISearchResults;

  constructor(public youtubeService: YoutubeService) {
    const getItemsData = async () => {
      await this.youtubeService.getDataFromFile();
      this.itemsData = this.youtubeService.itemsData;
    };

    getItemsData();
  }
}
