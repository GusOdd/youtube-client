import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { FilteringSectionComponent } from './components/filtering-section/filtering-section.component';
import { SortingButtonsComponent } from './components/filtering-section/sorting-buttons/sorting-buttons.component';
import { FilterInputComponent } from './components/filtering-section/filter-input/filter-input.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultItemComponent } from './components/search-results/search-result-item/search-result-item.component';
import { ItemVideoThumbnailComponent } from './components/search-results/search-result-item/item-video-thumbnail/item-video-thumbnail.component';
import { ItemViewsCountComponent } from './components/search-results/search-result-item/item-views-count/item-views-count.component';
import { ItemLikesCountComponent } from './components/search-results/search-result-item/item-likes-count/item-likes-count.component';
import { ItemDislikesCountComponent } from './components/search-results/search-result-item/item-dislikes-count/item-dislikes-count.component';
import { ItemCommentsCountComponent } from './components/search-results/search-result-item/item-comments-count/item-comments-count.component';
import { ItemVideoTitleComponent } from './components/search-results/search-result-item/item-video-title/item-video-title.component';
import { ItemMoreButtonComponent } from './components/search-results/search-result-item/item-more-button/item-more-button.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { BorderBottomColorDirective } from './directives/border-bottom-color.directive';

@NgModule({
  declarations: [
    FilteringSectionComponent,
    SortingButtonsComponent,
    FilterInputComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    ItemVideoThumbnailComponent,
    ItemViewsCountComponent,
    ItemLikesCountComponent,
    ItemDislikesCountComponent,
    ItemCommentsCountComponent,
    ItemVideoTitleComponent,
    ItemMoreButtonComponent,
    FilterByWordPipe,
    YoutubeComponent,
    VideoDetailsComponent,
    BorderBottomColorDirective,
  ],
  imports: [CommonModule, YoutubeRoutingModule, MatButtonModule, MatIconModule, MatCardModule],
  exports: [FilteringSectionComponent, SearchResultsComponent],
})
export class YoutubeModule {}
