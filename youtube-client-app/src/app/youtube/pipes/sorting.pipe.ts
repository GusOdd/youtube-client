import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../models/video-item';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(
    items: IVideoItem[],
    isSortingAscending: boolean,
    typeOfSorting: 'date' | 'count' | undefined,
  ): IVideoItem[] {
    const multiplication = isSortingAscending ? 1 : -1;

    if (typeOfSorting === 'date') {
      return items.sort(
        (a, b) =>
          multiplication * (+new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt)),
      );
    }

    if (typeOfSorting === 'count') {
      return items.sort(
        (a, b) => multiplication * (+a.statistics.viewCount - +b.statistics.viewCount),
      );
    }

    return items;
  }
}
