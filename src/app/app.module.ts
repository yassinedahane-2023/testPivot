import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxPivotDesignerModule } from 'jqwidgets-ng/jqxpivotdesigner';
import { TableDataComponent } from './comp/table-data/table-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PivotDataComponent } from './comp/pivot-data/pivot-data.component';
import {  MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    PivotDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     jqxPivotDesignerModule, 
     AppRoutingModule,
     MatTableModule,
     MatPaginatorModule,
     MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    jqxPivotGridModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
