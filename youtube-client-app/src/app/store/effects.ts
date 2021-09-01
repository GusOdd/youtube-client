import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { YoutubeService } from '../youtube/services/youtube.service';
import { loadSearchResults, loadSearchResultsSuccessful } from './actions';

@Injectable({
  providedIn: 'root',
})
export class AppEffects {
  constructor(private actions$: Actions, private youtubeService: YoutubeService) {}

  getData: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSearchResults),
      switchMap((payload) => {
        return this.youtubeService
          .getData(payload.term)
          .pipe(map((videoItems) => loadSearchResultsSuccessful({ videoItems })));
      }),
    );
  });
}
