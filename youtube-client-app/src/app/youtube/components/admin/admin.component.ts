import { Component } from '@angular/core';

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
