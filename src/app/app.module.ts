import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DarkmodeComponent } from 'projects/darkmode-angular/src/public-api';
import { NucleusAngularApp } from 'nucleus-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DarkmodeComponent, NucleusAngularApp],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
