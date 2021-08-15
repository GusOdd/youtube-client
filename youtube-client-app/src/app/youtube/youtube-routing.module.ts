import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';

const routes: Routes = [
  { path: '', component: YoutubeComponent },
  { path: ':id', component: VideoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
