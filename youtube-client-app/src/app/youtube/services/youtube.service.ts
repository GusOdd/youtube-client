import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISearchResults } from '../models/search-results';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  inputData?: string;

  cashedData?: ISearchResults;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<ISearchResults>('../../assets/data.json');
  }
}
