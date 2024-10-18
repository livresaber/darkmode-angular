import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DarkmodeComponent } from 'projects/darkmode-angular/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DarkmodeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
