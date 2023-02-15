import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pivot-data',
  templateUrl: './pivot-data.component.html',
  styleUrls: ['./pivot-data.component.css']
})
export class PivotDataComponent implements AfterViewInit , OnInit ,AfterContentChecked{
  @ViewChild('myPivotGrid', { static: false }) pivotGrid: any;
  @ViewChild('myPivotDesigner', { static: false }) pivotDesigner: any;

  data:any;
  columnNameFund:any;
  pivotDataSource:any;
  dataMap:Map<string,any>;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.data=this.route.snapshot.data['data'].data;
      const columnns:string[]=Object.keys(this.data[0]);
      columnns.forEach(colmn => this.dataMap.set(colmn,this.data.map((d:any) => d[colmn])));
      console.log(this.dataMap);
      this.pivotDataSource = this.createPivotDataSource();

  }

  constructor( private changeDetectorRef: ChangeDetectorRef,
               private route: ActivatedRoute )
  {
    this.dataMap=new Map<string,any>;
  }


 getWidth() : any {
   if (document.body.offsetWidth < 400) {
     return '50%';
   }

   return 400;
 }




 ngAfterViewInit() {
//  of(this.pivotGrid).subscribe({
//   next:(grid)=> {

    let pivotGridComponent = this.pivotGrid;
    let pivotGridInstance = pivotGridComponent.getInstance();
    this.pivotDesigner.target(pivotGridInstance);
    this.pivotDesigner.refresh();

//   }
//  });
 }

//
  createPivotDataSource(): any {
     // prepare sample data
     let data = new Array();
     let fundNames =this.dataMap.get("fundName");
    //let fundNames =["iShares Core S&P/ASX 200 ETF","iShares Core S&P/ASX 200 ETF","iShares Core S&P/ASX 200 ETF","iShares Core S&P/ASX 200 ETF"];

    let fundCode =this.dataMap.get("fundCode");

     let FundNAVPS =this.dataMap.get("Fund NAVPS");

     let FundNAV =this.dataMap.get("Fund NAV");

     let Sedol=this.dataMap.get("Sedol")

     let FundSharesinissue =this.dataMap.get("Fund Shares in issue");

     for (let i = 0; i < 100; i++) {
        let row : any={};
        let productindex = Math.floor(Math.random() * FundNAVPS.length);
        let FundShares = parseFloat(FundSharesinissue[productindex]);
        let quantity = 1 + Math.round(Math.random() * 10);
        row["fundName"] = fundNames[i];
        row["fundcode"] = fundCode[i];
        row["Fundnavps"] = FundNAVPS[i];
        row["Fundnav"] = FundNAV[i];
        row["FundShares"] = FundSharesinissue[i];
        row["Sedol"]=Sedol[i];
        row["total"] = FundShares * quantity;
        data[i] = row;
     }

    // create a data source and data adapter

     let source =
     {
        localdata: data,
        datatype: "array",
        datafields:
        [
           { name: 'fundName', type: 'string' },
           { name: 'fundcode', type: 'string' },
           { name: 'Fundnavps', type: 'string' },
           { name: 'Fundnav', type: 'string' },
           { name: 'FundShares', type: 'number' },
          { name: 'Sedol', type: 'number' },
           { name: 'total', type: 'number' }
        ]
     };
     let dataAdapter = new jqx.dataAdapter(source);

     dataAdapter.dataBind();

     // create a pivot data source from the dataAdapter
     let pivotDataSource = new jqx.pivot(
        dataAdapter,
        {
     customAggregationFunctions: {
       'var': function (values:any) {
         if (values.length <= 1)
           return 0;
         // sample's mean
         var mean = 0;
         for (var i = 0; i < values.length; i++)
           mean += values[i];
         mean /= values.length;
         // calc squared sum
         var ssum = 0;
         for (var i = 0; i < values.length; i++)
           ssum += Math.pow(values[i] - mean, 2)
         // calc the variance
         var variance = ssum / values.length;
         return variance;
       }
     },
     pivotValuesOnRows: false,
     rows : [{ dataField: 'fundName', text: 'Fund Name' },{ dataField: 'fundcode', text: 'Fund Code' }],
     columns: [],
     filters: [
      /*  {
         dataField: 'Fundnavps',
         text: 'Fund navps',
         filterFunction: function (value:any) {
             return true;

         }
       } */
     ],
     values: [
       { dataField: 'FundShares', 'function': 'max', text: 'MaxFundShares', align: 'left', cellsClassName: 'myItemStyle', cellsClassNameSelected: 'myItemStyleSelected' },
       { dataField: 'Fundnav', 'function': 'max', text: 'MaxFundNav', className: 'myItemStyle', classNameSelected: 'myItemStyleSelected' },
       { dataField: 'Fundnavps', 'function': 'count', text: 'CountFundnavps', className: 'myItemStyle', classNameSelected: 'myItemStyleSelected' }
     ]
        }
     );

    console.log('pivotDataSource created');

    return pivotDataSource;
  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
