import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {PeriodicElement} from "../../comp/table-data/table-data.component";
import {MatPaginator} from "@angular/material/paginator";
import {Location} from "@angular/common";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit,AfterViewInit{
  id:any;
  actionsData:any
  @ViewChild(MatPaginator) paginator: any;

  toppings:  FormControl;
  toppingList: string[] =[];
  dataSource:any;
  displayedColumns: string[] = ['sedol','securityName', 'securityType', 'issuer','isin','numberOfShares','actions'];
constructor(private route: Router, private http:HttpClient,private location: Location) {
  this.toppings=new FormControl(this.toppingList);

  // @ts-ignore
  this.actionsData=this.route.getCurrentNavigation()?.extras.state['positions'];
}

  ngOnInit(): void {
    this.toppingList=['sedol','securityName'];
    this.toppings=new FormControl(this.toppingList);
    console.log(this.actionsData);
    this.dataSource = new MatTableDataSource<PositionsModel>(this.actionsData);
  }
  onBackClicked(){
    this.location.back();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PositionsModel {
  sedol: string;
  securityName: string;
  securityType: string;
  isin: string;
  issuer: string;
  numberOfShares: string
  actions:any;

}
