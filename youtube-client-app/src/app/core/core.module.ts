import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LoginInformationComponent } from './components/header/login-information/login-information.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    LoginInformationComponent,
    PageNotFoundComponent,
    StartPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
