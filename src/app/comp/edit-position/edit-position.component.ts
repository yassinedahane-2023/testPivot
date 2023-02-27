import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from 'src/app/services/fund.service';
import {Location} from "@angular/common";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent {
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
    this.fundService.getPosition(id).subscribe(data=>{
      console.log(data)
      this.currentData=data;
    },err=>{
      console.log(err);
    })
  }
  onBackClicked(){
    this.location.back();
  }

  onUpdatePosition(data:any){
    const id=this.activatedRoute.snapshot.params['id'];
    return this.fundService.updatePosition(id,data).subscribe(dt=>{
      alert("Mise a jour effectuée avec succès")
      this.onBackClicked()
    },err=>{
      console.log(err);
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  
  confirm(dataUpdated:any) {
    const id=this.activatedRoute.snapshot.params['id'];
    return this.fundService.updatePosition(id,dataUpdated).subscribe(dt=>{
      //alert("Mise a jour effectuée avec succès")
      this.message = 'Confirmed!';
      console.log(this.message)
      this.modalRef.hide();
      this.onBackClicked()
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
