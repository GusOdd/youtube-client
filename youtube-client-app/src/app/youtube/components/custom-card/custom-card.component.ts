import { Component, Input } from '@angular/core';
import { ICustomCard } from '../../models/custom-card';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() card?: ICustomCard;
}
