import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
// import { DxButtonComponent } from 'devextreme-angular';
import { ProbaComponent } from './proba/proba.component';

@NgModule({
   declarations: [
      AppComponent,
      ProbaComponent,
      // DxButtonComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DxButtonModule,
      DxTextBoxModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
