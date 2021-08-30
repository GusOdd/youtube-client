import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvideTokenInterceptor } from './http-interceptors/provide-token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ProvideTokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
