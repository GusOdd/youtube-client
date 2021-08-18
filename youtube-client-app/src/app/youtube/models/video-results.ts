import { IVideoItem } from './video-item';

export interface IVideoResults {
  etag: string;
  items: IVideoItem[];
  kind: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}
