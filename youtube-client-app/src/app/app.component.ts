import { Component } from '@angular/core';
import { ISearchResults } from './youtube/models/search-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Youtube Client App';

  isFilteringSectionDisplay = false;

  isSearchResultsDisplay = false;

  isSortingAscending = true;

  itemsData?: ISearchResults;

  inputData?: string;

  onClickHeaderHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('settings-button')) {
      this.isFilteringSectionDisplay = !this.isFilteringSectionDisplay;
    }

    if (eventTarget.closest('button')?.classList.contains('search-button')) {
      this.isSearchResultsDisplay = true;
    }
  }

  onClickFilteringSectionHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('sort-by-date-button')) {
      if (this.isSortingAscending) {
        this.itemsData!.items.sort(
          (a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt),
        );
        this.isSortingAscending = false;
      } else {
        this.itemsData!.items.sort(
          (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt),
        );
        this.isSortingAscending = true;
      }
    }

    if (eventTarget.closest('button')?.classList.contains('sort-by-count-button')) {
      if (this.isSortingAscending) {
        this.itemsData!.items.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
        this.isSortingAscending = false;
      } else {
        this.itemsData!.items.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
        this.isSortingAscending = true;
      }
    }
  }

  onInputFilteringSectionHandler(event: Event) {
    const eventTarget = event.target as HTMLInputElement;

    if (eventTarget.classList.contains('input-by-word')) {
      this.inputData = eventTarget.value.toLowerCase();
    }
  }
}
