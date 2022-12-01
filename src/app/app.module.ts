import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RecaptchaV3Module],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
