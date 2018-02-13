import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Tab1Component } from './tab-1/tab-1.component';
import { Tab2Component } from './tab-2/tab-2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
