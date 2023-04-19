import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StimulsoftDesignerModule } from 'stimulsoft-designer-angular';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ResolverService} from "./services/resolver.service";
import {FundService} from "./services/fund.service";
import { RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { FundsComponent } from './pages/funds/funds.component';
import { PositionsComponent } from './pages/positions/positions.component';
import { FundsAgrComponent } from './pages/funds-agr/funds-agr.component';
import { EditFundsComponent } from './comp/edit-funds/edit-funds.component';
import { MatInputModule } from '@angular/material/input';
import { EditPositionComponent } from './comp/edit-position/edit-position.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthComponent } from './comp/auth/auth.component';
import { AccountComponent } from './comp/account/account.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { StimulsoftViewerModule } from 'stimulsoft-viewer-angular';
import { ExportService } from 'stimulsoft-viewer-angular/lib/services/export.service';


@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    PivotDataComponent,
    FundsComponent,
    PositionsComponent,
    FundsAgrComponent,
    EditFundsComponent,
    EditPositionComponent,
    AuthComponent,
    AccountComponent,
    SignUpComponent
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
    BrowserAnimationsModule,
    StimulsoftViewerModule,
    StimulsoftDesignerModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,NgbDropdownModule,
    
    jqxPivotGridModule, BrowserAnimationsModule,RouterModule,jqxWindowModule,jqxDataTableModule, ModalModule.forRoot()
  ],
  providers: [ResolverService, FundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
