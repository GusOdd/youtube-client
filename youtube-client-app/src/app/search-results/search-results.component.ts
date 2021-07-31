import { Component, Input } from '@angular/core';
import { ISearchResults } from './search-results';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() itemsData?: ISearchResults;
}
