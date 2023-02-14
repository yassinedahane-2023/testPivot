import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './comp/table-data/table-data.component';
import { PivotDataComponent } from './comp/pivot-data/pivot-data.component';

const routes: Routes = [
  { path: '', component: TableDataComponent },
  { path: 'pivot', component: PivotDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
