import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-views-count',
  templateUrl: './item-views-count.component.html',
  styleUrls: ['./item-views-count.component.scss'],
})
export class ItemViewsCountComponent {
  @Input() count?: string;
}
