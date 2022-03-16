import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-modal-add-to-my-list',
  templateUrl: './modal-add-to-my-list.component.html',
  styleUrls: ['./modal-add-to-my-list.component.css']
})
export class ModalAddToMyListComponent implements OnInit {

  @Input() anime : any;
  currentRate = 0;
  FormAddList: FormGroup;
  privacy : boolean = false;
  fav : boolean = false;
  dataStatus: any;
  StatusControl = ""
  checked;
  rate ;
  episode ;
  favorites;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private serviceStatus: StatusService) {
    config.backdrop = true;
    config.keyboard = false;

    this.FormAddList = new FormGroup({
      StatusControl: new FormControl(null, Validators.required),
      checked: new FormControl(null, Validators.required),
      Rate: new FormControl(null, Validators.required),
      Episode: new FormControl(null, Validators.required),
      favorites: new FormControl(null, Validators.required),
   });
   }

  ngOnInit(): void {
    // GET LIST DES STATUS BACK
    this.getStatusListPersoInOurBack();
    this.initFormValue();
  }

  initFormValue(){
    this.FormAddList.get("StatusControl").setValue("WATCHING");
    this.checked = this.FormAddList.get("checked").setValue(false);
    this.rate = this.FormAddList.get("Rate").setValue(0);
    this.episode = this.FormAddList.get("Episode").setValue(1);
    this.favorites = this.FormAddList.get("favorites").setValue(false);
  }

  async getStatusListPersoInOurBack() {
    await this.serviceStatus.getAllStatus()
      .subscribe((dataR: any) => {
        console.log(dataR);
        this.dataStatus = dataR;
      }
      );
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  addToMyList(obj) {
    let IdAnimeToSave  = obj.data.Media.id;
    console.log(IdAnimeToSave);
    this.StatusControl = this.FormAddList.get("StatusControl").value;
    this.checked = this.FormAddList.get("checked").value;
    this.rate = this.FormAddList.get("Rate").value;
    this.episode = this.FormAddList.get("Episode").value;
    this.favorites = this.FormAddList.get("favorites").value;
    console.log(this.StatusControl + " " + this.checked + " " + this.rate +" " + this.favorites + " " +this.episode);
    
    
    //AJOUTER LA REQUETE POUR ADD TO MY LIST BACK
    
  }

}
