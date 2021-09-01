import { Component } from '@angular/core';

import { FilteringSectionService } from 'src/app/youtube/services/filtering-section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private filteringSectionService: FilteringSectionService) {}

  onClickSettingsButtonHandler() {
    this.filteringSectionService.isFilteringSectionDisplay =
      !this.filteringSectionService.isFilteringSectionDisplay;
  }
}
