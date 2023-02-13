import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxPivotDesignerModule } from 'jqwidgets-ng/jqxpivotdesigner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     jqxPivotDesignerModule, 
     jqxPivotGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
