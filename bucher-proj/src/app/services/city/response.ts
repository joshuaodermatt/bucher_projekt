export interface Response {
  _embedded: SearchResults;
  _links;
  count;
}

export interface SearchResults {
  ['city:search-results']: SearchResultsContent[];
}


export interface SearchResultsContent {
  matching_full_name: string;
}
