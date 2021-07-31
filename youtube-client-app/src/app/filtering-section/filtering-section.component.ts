import { Component, Input } from '@angular/core';
import { ISearchResults } from '../search-results/search-results';

@Component({
  selector: 'app-filtering-section',
  templateUrl: './filtering-section.component.html',
  styleUrls: ['./filtering-section.component.scss'],
})
export class FilteringSectionComponent {
  @Input() itemsData?: ISearchResults;
}
