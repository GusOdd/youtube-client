import { Pipe, PipeTransform } from '@angular/core';
import { ISearchResultItem } from './search-results/search-result-item/search-result-item';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {
  transform(items: ISearchResultItem[], inputValue?: string): ISearchResultItem[] {
    if (inputValue) {
      return items.filter((element) => element.snippet.title.toLowerCase().includes(inputValue));
    }
    return items;
  }
}
