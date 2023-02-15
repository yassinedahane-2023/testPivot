import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './comp/table-data/table-data.component';
import { PivotDataComponent } from './comp/pivot-data/pivot-data.component';
import {ResolverService} from "./services/resolver.service";

const routes: Routes = [
  { path: '', component: TableDataComponent },
  { path: 'pivot', component: PivotDataComponent,resolve: {data:ResolverService} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
