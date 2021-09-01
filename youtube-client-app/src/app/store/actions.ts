import { createAction, props } from '@ngrx/store';
import { ICustomCard } from '../youtube/models/custom-card';
import { IVideoItem } from '../youtube/models/video-item';

export const createCustomCard = createAction(
  'CREATE CUSTOM CARD',
  props<{ customCard: ICustomCard }>(),
);

// export const getCustomCards = createAction('GET CUSTOM CARDS', props<>());

// export const getCustomCardByID = createAction('GET CUSTOM CARD BY ID', props<>());

// export const updateSearchResults = createAction('UPDATE SEARCH RESULTS', props<>());

export const loadSearchResults = createAction('LOAD SEARCH RESULTS', props<{ term: string }>());

export const loadSearchResultsSuccessful = createAction(
  'LOAD SEARCH RESULTS SUCCESSFUL',
  props<{ videoItems: IVideoItem[] }>(),
);
