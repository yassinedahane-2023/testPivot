import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './comp/table-data/table-data.component';
import { PivotDataComponent } from './comp/pivot-data/pivot-data.component';
import {ResolverService} from "./services/resolver.service";
import {PositionsComponent} from "./pages/positions/positions.component";
import { EditFundsComponent } from './comp/edit-funds/edit-funds.component';
import { EditPositionComponent } from './comp/edit-position/edit-position.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: TableDataComponent },
  { path: 'positions/:id', component: PositionsComponent },
  { path: 'pivot', component: PivotDataComponent,resolve: {data:ResolverService} },
  { path:'editFund/:id',component:EditFundsComponent},
  { path: 'editPosition/:id',component:EditPositionComponent},
  { path : 'sign-up',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
