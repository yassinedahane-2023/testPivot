import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FundService } from 'src/app/services/fund.service';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','fundName', 'fundCode', 'Sedol','securityName','securityType','Issuer','issuerCountry'];
  ELEMENT_DATA: any;
  dataSource :any
  @ViewChild(MatPaginator) paginator: any;
  data:any;
  selectedColumn:any;
  toppings = new FormControl();
  toppingList: string[] =[];

  constructor(private servicecli:FundService){
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.servicecli.getAllData().then(dt=>{
      this.data=dt.data;
      console.log(this.data)
      console.log(Object.keys(this.data[0]))
      this.toppingList=Object.keys(this.data[0])
      this.ELEMENT_DATA=this.data;

      this.toppings.setValue(this.displayedColumns);
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }
  selectedFunc(e:any){
    console.log(e)
  }

  ngAfterViewInit() {

  }
}

export interface PeriodicElement {
  id: number;
  fundName: string;
  fundCode: string;
  Sedol: string;
  securityName: string;
  securityType: string;
  issuer: string;
}


