import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';

const routes: Routes = [
  { path: '', component: YoutubeComponent },
  { path: ':id', component: VideoDetailsComponent },
  { path: 'restricted-area/admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
