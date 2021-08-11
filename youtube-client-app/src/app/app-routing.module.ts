import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { StartPageComponent } from './core/pages/start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent, canActivate: [AuthGuard] },
  {
    path: 'results',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  { path: '404', component: PageNotFoundComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
