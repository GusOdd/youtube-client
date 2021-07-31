import { Component, Input } from '@angular/core';
import { ISearchResultItem } from './search-result-item';
@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() item?: ISearchResultItem;
}
