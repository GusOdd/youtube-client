import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LoginInformationComponent } from './components/header/login-information/login-information.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    LoginInformationComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
