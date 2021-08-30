import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../models/video-item';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {
  transform(items: IVideoItem[], inputValue?: string): IVideoItem[] {
    if (inputValue) {
      return items.filter((element) => element.snippet.title.toLowerCase().includes(inputValue));
    }
    return items;
  }
}
