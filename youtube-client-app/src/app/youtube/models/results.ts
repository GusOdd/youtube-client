export interface IResults {
  etag: string;
  kind: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}
