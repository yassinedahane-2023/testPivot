import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {PeriodicElement} from "../../comp/table-data/table-data.component";
import {MatPaginator} from "@angular/material/paginator";
import {Location} from "@angular/common";
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit,AfterViewInit{
  id:any;
  actionsData:any
  @ViewChild(MatPaginator) paginator: any;
  showViewer = true;

  @ViewChild('designer') designer: any;
  toppings:  FormControl;
  toppingList: string[] =[];
  dataSource:any;
  displayedColumns: string[] = ['sedol','securityName', 'securityType', 'issuer','isin','numberOfShares','actions'];
  constructor(private route: Router,private fundService:FundService, private http:HttpClient,private location: Location,private activatedRoute:ActivatedRoute) {
  this.toppings=new FormControl(this.toppingList);

  // @ts-ignore
 // this.actionsData=this.route.getCurrentNavigation()?.extras.state['positions'];
}
  backToViewer() {
    this.showViewer = !this.showViewer;
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    const id=this.activatedRoute.snapshot.params['id'];
    this.fundService.getAllFundsByCode(id).subscribe(data=>{
      console.log(data.positions)
      this.actionsData=data.positions;
      this.dataSource = new MatTableDataSource<PositionsModel>(data.positions); 
      this.toppingList=['sedol','securityName'];
    this.toppings=new FormControl(this.toppingList);
    this.dataSource.paginator = this.paginator;
    },err=>{
      console.log(err);
    })
   
    console.log(this.actionsData);
    
  }

  onBackClicked() {
    this.location.back();
  }
  onEditPosition(data:any){
    this.route.navigateByUrl('editPosition/'+data.sedol)
  }
  ngAfterViewInit(): void {
    
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
