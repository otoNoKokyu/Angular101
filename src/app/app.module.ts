import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SetbackgroundDirective } from './customDirective/setbackground.directive';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SetbackgroundDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
