import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FilteringSectionService } from 'src/app/youtube/services/filtering-section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private filteringSectionService: FilteringSectionService, private router: Router) {}

  onClickSettingsButtonHandler() {
    this.filteringSectionService.isFilteringSectionDisplay =
      !this.filteringSectionService.isFilteringSectionDisplay;
  }

  async onClickSearchInputHandler(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('search-button')) {
      this.router.navigate(['/results']);
    }
  }
}
