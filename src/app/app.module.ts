import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SeeMoreModule} from './see-more/see-more.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeeMoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
