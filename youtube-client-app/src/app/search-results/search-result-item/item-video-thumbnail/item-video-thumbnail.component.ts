import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-video-thumbnail',
  templateUrl: './item-video-thumbnail.component.html',
  styleUrls: ['./item-video-thumbnail.component.scss'],
})
export class ItemVideoThumbnailComponent {
  @Input() thumbnailUrl?: string;
}
