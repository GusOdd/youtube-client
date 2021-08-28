import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';

import { IVideoResults } from '../models/video-results';
import { ISearchResults } from '../models/search-results';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  inputData?: string;

  cashedData?: IVideoResults;

  cashedItem?: IVideoResults;

  searchText?: string;

  constructor(private http: HttpClient) {}

  getData(query: string) {
    const url = `/search?q=${query}&type=video&part=snippet&maxResults=15`;
    return this.http.get<ISearchResults>(url).pipe(
      switchMap((response: ISearchResults) => {
        const listOfVideoId: string[] = [];
        response.items.forEach((element) => listOfVideoId.push(element.id.videoId));
        const newUrl = `/videos?&id=${[...listOfVideoId]}&part=snippet,statistics`;
        return this.http.get<IVideoResults>(newUrl);
      }),
    );
  }

  getItem(id: string) {
    const url = `/videos?&id=${id}&part=snippet,statistics`;
    return this.http.get<IVideoResults>(url);
  }
}
