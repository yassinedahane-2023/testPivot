import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FundService } from 'src/app/services/fund.service';
import {Location} from "@angular/common";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-funds',
  templateUrl: './edit-funds.component.html',
  styleUrls: ['./edit-funds.component.css']
})
export class EditFundsComponent {
   currentData:any;
   modalRef: any;
   message: any;
  constructor(private route:Router,private activatedRoute:ActivatedRoute,
    private fundService:FundService,private location: Location,private modalService: BsModalService){
      this.modalRef=new BsModalRef;
  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  const id=this.activatedRoute.snapshot.params['id'];
  this.fundService.getAllFundsByCode(id).subscribe(data=>{
    console.log(data.positions)
    this.currentData=data;
  },err=>{
    console.log(err);
  })
}

onBackClicked(){
  this.location.back();
}

onUpdateFund(dataUpdated:any){
  const id=this.activatedRoute.snapshot.params['id'];
return this.fundService.updateFund(id,dataUpdated).subscribe(dt=>{
  //alert("Mise a jour effectuée avec succès")
  this.route.navigateByUrl('/')
},err=>{
  console.log(err);
})
}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(dataUpdated:any) {
  const id=this.activatedRoute.snapshot.params['id'];
return this.fundService.updateFund(id,dataUpdated).subscribe(dt=>{
  //alert("Mise a jour effectuée avec succès")
  this.route.navigateByUrl('/')
  this.message = 'Confirmed!';
  console.log(this.message)
  this.modalRef.hide();
},err=>{
  console.log(err);
})
  
}

decline(): void {
  this.message = 'Declined!';
  console.log(this.message)
  this.modalRef.hide();
}
}
