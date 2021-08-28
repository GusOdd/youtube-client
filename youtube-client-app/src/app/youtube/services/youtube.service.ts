import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IVideoResults } from '../models/video-results';
import { ISearchResults } from '../models/search-results';
import { IVideoItem } from '../models/video-item';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  inputData?: string;

  cashedDataItems$?: Observable<IVideoItem[]>;

  cashedItem$?: Observable<IVideoItem>;

  searchText?: string;

  isSortingAscending: boolean = true;

  typeOfSorting?: 'date' | 'count';

  constructor(private http: HttpClient) {}

  getData(query: string) {
    this.typeOfSorting = undefined;

    const url = `/search?q=${query}&type=video&part=snippet&maxResults=15`;
    this.http
      .get<ISearchResults>(url)
      .pipe(
        map((response: ISearchResults) => {
          const listOfVideoId: string[] = [];
          response.items.forEach((element) => listOfVideoId.push(element.id.videoId));
          const newUrl = `/videos?&id=${[...listOfVideoId]}&part=snippet,statistics`;
          this.cashedDataItems$ = this.http
            .get<IVideoResults>(newUrl)
            .pipe(map((results) => results.items));
        }),
      )
      .subscribe();
  }

  getItem(id: string) {
    const url = `/videos?&id=${id}&part=snippet,statistics`;
    this.cashedItem$ = this.http.get<IVideoResults>(url).pipe(map((results) => results.items[0]));
  }
}
