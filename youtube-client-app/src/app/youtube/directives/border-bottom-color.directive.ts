import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { MS_IN_HALF_YEAR, MS_IN_MONTH, MS_IN_WEEK } from 'src/app/shared/constants';

@Directive({
  selector: '[appBorderBottomColor]'
})
export class BorderBottomColorDirective implements OnInit {
  @Input() appBorderBottomColor?: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const currentTimestamp = new Date();
    const videoTimestamp = new Date(this.appBorderBottomColor as string);
    const difference = +currentTimestamp - +videoTimestamp;

    if (difference < MS_IN_MONTH) this.element.nativeElement.classList.add('green');
    if (difference < MS_IN_WEEK) this.element.nativeElement.classList.add('blue');
    if (difference > MS_IN_HALF_YEAR) this.element.nativeElement.classList.add('red');
  }
}
