import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { LoginInformationComponent } from './header/login-information/login-information.component';
import { FilteringSectionComponent } from './filtering-section/filtering-section.component';
import { SortingButtonsComponent } from './filtering-section/sorting-buttons/sorting-buttons.component';
import { FilterInputComponent } from './filtering-section/filter-input/filter-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultItemComponent } from './search-results/search-result-item/search-result-item.component';
import { ItemVideoThumbnailComponent } from './search-results/search-result-item/item-video-thumbnail/item-video-thumbnail.component';
import { ItemViewsCountComponent } from './search-results/search-result-item/item-views-count/item-views-count.component';
import { ItemLikesCountComponent } from './search-results/search-result-item/item-likes-count/item-likes-count.component';
import { ItemDislikesCountComponent } from './search-results/search-result-item/item-dislikes-count/item-dislikes-count.component';
import { ItemCommentsCountComponent } from './search-results/search-result-item/item-comments-count/item-comments-count.component';
import { ItemVideoTitleComponent } from './search-results/search-result-item/item-video-title/item-video-title.component';
import { ItemMoreButtonComponent } from './search-results/search-result-item/item-more-button/item-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    LoginInformationComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
