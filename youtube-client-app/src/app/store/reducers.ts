import { createReducer, on } from '@ngrx/store';

import * as AppActions from './actions';
import { initialState } from './state';

export const videoItemsReducer = createReducer(
  initialState.videoItems,
  on(AppActions.loadSearchResults, (state) => {
    return [...state];
  }),
  on(AppActions.loadSearchResultsSuccessful, (state, { videoItems }) => {
    return [...videoItems];
  }),
);

export const customCardsReducer = createReducer(
  initialState.customCards,
  on(AppActions.createCustomCard, (state, { customCard }) => {
    return [...state, customCard];
  }),
);
