import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetbackgroundDirective } from './customDirective/setbackground.directive';


@NgModule({
  declarations: [
    AppComponent,
    SetbackgroundDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
