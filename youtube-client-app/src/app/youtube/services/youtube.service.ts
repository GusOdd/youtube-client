import { Injectable } from '@angular/core';

import { ISearchResults } from '../models/search-results';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  itemsData?: ISearchResults;

  async getDataFromFile() {
    const res = await fetch('../../assets/data.json');
    this.itemsData = await res.json();
  };
}
