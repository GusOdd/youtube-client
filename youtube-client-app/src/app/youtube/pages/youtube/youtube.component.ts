import { Component } from '@angular/core';
import { FilteringSectionService } from '../../services/filtering-section.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  constructor(public filteringSectionService: FilteringSectionService) {}
}
