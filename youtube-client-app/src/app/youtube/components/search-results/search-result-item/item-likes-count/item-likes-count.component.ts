import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-likes-count',
  templateUrl: './item-likes-count.component.html',
  styleUrls: ['./item-likes-count.component.scss'],
})
export class ItemLikesCountComponent {
  @Input() count?: string;
}
