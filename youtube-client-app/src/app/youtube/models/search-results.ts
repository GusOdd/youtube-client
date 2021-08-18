import { IResults } from './results';
import { ISearchResultItem } from './search-result-item';

export interface ISearchResults extends IResults {
  items: ISearchResultItem[];
}
