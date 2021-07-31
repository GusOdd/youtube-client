import { Component, Input, OnInit } from '@angular/core';
import { MS_IN_HALF_YEAR, MS_IN_MONTH, MS_IN_WEEK } from 'src/app/shared/constants';
import { ISearchResultItem } from './search-result-item';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  @Input() item?: ISearchResultItem;

  borderColor?: string;

  ngOnInit() {
    const currentTimestamp = new Date();
    const videoTimestamp = new Date(this.item!.snippet.publishedAt);
    const difference = +currentTimestamp - +videoTimestamp;
    console.log(difference, MS_IN_MONTH, MS_IN_WEEK, MS_IN_HALF_YEAR);
    if (difference < MS_IN_MONTH) this.borderColor = 'green';
    if (difference < MS_IN_WEEK) this.borderColor = 'blue';
    if (difference > MS_IN_HALF_YEAR) this.borderColor = 'red';
  }
}
