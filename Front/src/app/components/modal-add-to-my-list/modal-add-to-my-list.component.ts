import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
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
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  addToMyList(obj) {
    let IdAnimeToSave  = obj.data.Media.id;
    console.log(IdAnimeToSave);
    let StatusControl = this.FormAddList.get("StatusControl").value;
    let checked = this.FormAddList.get("checked").value;
    let rate = this.FormAddList.get("Rate").value;
    let episode = this.FormAddList.get("Episode").value;
    let favorites = this.FormAddList.get("favorites").value;
    console.log(StatusControl + " " + checked + " " + rate +" " + favorites + " " +episode);
    
    //AJOUTER LA REQUETE POUR ADD TO MY LIST BACK
    
  }

}
