import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { createCustomCard } from 'src/app/store/actions';
import { IAppState } from '../../models/app-state';
import { ICustomCard } from '../../models/custom-card';

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

  constructor(private store: Store<IAppState>, private router: Router) {}

  onSubmit(event: Event) {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest('button')?.classList.contains('submit-button')) {
      event.preventDefault();

      if (this.valueTitle && this.valueDescription && this.valueImage && this.valueVideo) {
        const newCard: ICustomCard = {
          title: this.valueTitle,
          description: this.valueDescription,
          image: this.valueImage,
          video: this.valueVideo,
          date: new Date().toString(),
        };

        this.store.dispatch(createCustomCard({ customCard: newCard }));

        this.router.navigate(['/results']);
      }
    }
  }
}
