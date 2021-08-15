import { Injectable } from '@angular/core';
import { MS_IN_HALF_YEAR, MS_IN_MONTH, MS_IN_WEEK } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class BorderBottomColorService {
  borderBottomColorPaint(timestamp: string) {
    const currentTimestamp = new Date();
    const videoTimestamp = new Date(timestamp);
    const difference = +currentTimestamp - +videoTimestamp;
    if (difference < MS_IN_MONTH) return 'green';
    if (difference < MS_IN_WEEK) return 'blue';
    if (difference > MS_IN_HALF_YEAR) return 'red';
    return undefined;
  }
}
