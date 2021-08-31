import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

  searchTerms = new Subject<string>();

  constructor(private http: HttpClient) {}

  getData(query: string): Observable<IVideoItem[]> {
    this.typeOfSorting = undefined;

    const url = `/search?q=${query}&type=video&part=snippet&maxResults=15`;
    return this.http
      .get<ISearchResults>(url)
      .pipe(
        switchMap((response: ISearchResults) => {
          const listOfVideoId: string[] = [];
          response.items.forEach((element) => listOfVideoId.push(element.id.videoId));
          const newUrl = `/videos?&id=${[...listOfVideoId]}&part=snippet,statistics`;
          return this.http
            .get<IVideoResults>(newUrl)
            .pipe(map((results) => results.items));
        }),
      )
  }

  getItem(id: string) {
    const url = `/videos?&id=${id}&part=snippet,statistics`;
    this.cashedItem$ = this.http.get<IVideoResults>(url).pipe(map((results) => results.items[0]));
  }
}
