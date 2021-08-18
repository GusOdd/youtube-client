import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';

import { IVideoResults } from '../models/video-results';
import { ISearchResults } from '../models/search-results';
import { API_KEY, API_URL } from 'src/app/shared/constants';


@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  inputData?: string;

  cashedData?: IVideoResults;

  constructor(private http: HttpClient) {}

  getData(query: string) {
    const url = `${API_URL}/search?q=${query}&key=${API_KEY}&type=video&part=snippet&maxResults=15`;
    return this.http.get<ISearchResults>(url).pipe(
      switchMap(
        (response: ISearchResults) => {
          const listOfVideoId: string[] = [];
          response.items.forEach(element => listOfVideoId.push(element.id.videoId));
          const newUrl = `${API_URL}/videos?&key=${API_KEY}&id=${[...listOfVideoId]}&part=snippet,statistics`;
          return this.http.get<IVideoResults>(newUrl);
        }
      )
    );
  }
}
