import { ISearchResultItem } from './search-result-item/search-result-item';

export interface ISearchResults {
  etag: string;
  items: ISearchResultItem[];
  kind: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}
