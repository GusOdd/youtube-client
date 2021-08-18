import { IItem } from './item';

export interface ISearchResultItem extends IItem {
  id: { kind: string; videoId: string };
}
