import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../models/app-state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  valueTitle?: string;

  valueDescription?: string;

  valueImage?: string;

  valueVideo?: string;

  constructor(private store: Store<IAppState>) {
    console.log(this.store);
  }

  onSubmit(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('submit-button')) {
      event.preventDefault();
      if (this.valueTitle && this.valueDescription && this.valueImage && this.valueVideo) {
        console.log('tick');
      }
    }
  }
}
