import { Component } from '@angular/core';
import { YoutubeService } from './youtube/services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Youtube Client App';

  constructor(public youtubeService: YoutubeService) {}
}
