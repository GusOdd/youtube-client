import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Youtube Client App';

  isFilteringSectionDisplay = false;

  isSearchResultsDisplay = false;

  onClickHeaderHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('settings-button')) {
      this.isFilteringSectionDisplay = !this.isFilteringSectionDisplay;
    }

    if (eventTarget.closest('button')?.classList.contains('search-button')) {
      this.isSearchResultsDisplay = true;
    }
  }
}
