import { createAction, props } from '@ngrx/store';
import { ICustomCard } from '../youtube/models/custom-card';
import { IVideoItem } from '../youtube/models/video-item';

export const loadSearchResults = createAction('LOAD SEARCH RESULTS', props<{ term: string }>());

export const loadSearchResultsSuccessful = createAction(
  'LOAD SEARCH RESULTS SUCCESSFUL',
  props<{ videoItems: IVideoItem[] }>(),
);

export const createCustomCard = createAction(
  'CREATE CUSTOM CARD',
  props<{ customCard: ICustomCard }>(),
);
