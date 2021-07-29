import { ISearchResultItem } from './search-result-item/search-result-item';

export interface ISearchResults {
  totalResults: number;
  items: ISearchResultItem[];
}
