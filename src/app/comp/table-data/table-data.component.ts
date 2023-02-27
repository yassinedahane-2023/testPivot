import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FundService } from 'src/app/services/fund.service';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import { AuthSession } from '@supabase/supabase-js';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit, AfterViewInit {
    //displayedColumns: string[] = ['fundCode','fundName', 'fundNav', 'fundNavPS','fundSharedInIssue','actions'];
   

    displayedColumns: string[] = ['fundCode','fundName', 'max_Nav','max_iss', 'count_PS','actions'];
  ELEMENT_DATA: any;
  dataSource :any
  @ViewChild(MatPaginator) paginator: any;
  data:any;
  toppings :FormControl ;
  toppingList: string[] =[];

  constructor(private servicecli:FundService , private router:Router){
    this.toppings=new FormControl(this.toppingList);

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

   this.servicecli.getAllFunds().subscribe((dt)=>{
     this.data=dt;
     console.log(this.data);
     this.toppingList=['fundName','fundCode'];
     this.toppings=new FormControl(this.toppingList);
     this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
       this.dataSource.paginator = this.paginator;

     }

   );


  }
  selectedFunc(e:any){
    console.log(e)
  }
  onRowSelected(row:any) {
    this.router.navigateByUrl('/positions/'+row.fundCode);
  }

  onEdit(elem:any){
    this.router.navigateByUrl('/editFund/'+elem.fundCode)
  }

  ngAfterViewInit() {

  }

}

export interface PeriodicElement {
  fundCode: string;
  fundName: string;
  fundNav: string;
  fundNavPS: string;
  fundSharedInIssue: string;
  actions:any;

}


