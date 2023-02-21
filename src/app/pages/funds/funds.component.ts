import { Component } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent {
  displayedColumns: string[] = ['fundCode','fundName', 'fundNav', 'fundNavPS','fundSharedInIssue','actions'];

}
