import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISearchResults } from '../youtube/models/search-results';
import { IVideoResults } from '../youtube/models/video-results';

@Injectable()
export class ProvideTokenInterceptor implements HttpInterceptor {
  commonPart = 'https://www.googleapis.com/youtube/v3';

  apiKey = 'AIzaSyAQCjCFCwYl0hlvQelASonkXbUyqwU-lPI';

  intercept(
    request: HttpRequest<ISearchResults | IVideoResults>,
    next: HttpHandler,
  ): Observable<HttpEvent<ISearchResults | IVideoResults>> {
    const requestWithTokenAndCommonPart = request.clone({
      url: `${this.commonPart}${request.url}&key=${this.apiKey}`,
    });
    return next.handle(requestWithTokenAndCommonPart);
  }
}
