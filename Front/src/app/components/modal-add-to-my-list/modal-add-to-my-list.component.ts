import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StatusService } from 'src/app/services/status.service';
import { ListPerso } from 'src/app/models/listPerso.model';
import { ListPersoService } from 'src/app/services/listPerso.service';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/models/anime.model';

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

  constructor(config: NgbModalConfig, private modalService: NgbModal, private serviceStatus: StatusService, private serviceAnime: AnimeService, private serviceListPerso: ListPersoService) {
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
    this.checked = this.FormAddList.get("checked").setValue(false);
    this.rate = this.FormAddList.get("Rate").setValue(0);
    this.episode = this.FormAddList.get("Episode").setValue(1);
    this.favorites = this.FormAddList.get("favorites").setValue(false);
  }

  async getStatusListPersoInOurBack() {
    await this.serviceStatus.getAllStatus()
      .subscribe((dataR: any) => {
        //console.log(dataR);
        this.dataStatus = dataR;
        this.FormAddList.get("StatusControl").setValue(this.dataStatus[1]);
      }
      );
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  addToMyList(obj: any) {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(user != null){
      let listPerso = new ListPerso();
      listPerso.userId = user.id;
      listPerso.categoryListPersoId = this.FormAddList.get("StatusControl").value.id;
      listPerso.privacy = this.FormAddList.get("checked").value;
      listPerso.score = this.FormAddList.get("Rate").value;
      listPerso.progression = this.FormAddList.get("Episode").value;
      listPerso.favorite = this.FormAddList.get("favorites").value;
      listPerso.animeId = obj.data.Media.id;

      this.addAnimeIfNeccessary(listPerso);
    }
    else{
      alert("You need to be logged in order to add an anime to your list.");
    }
  }

  async addAnimeIfNeccessary(listPerso : ListPerso) {
    await this.serviceAnime.getAnime(listPerso.animeId).subscribe((dataBack: any) => {
      if(dataBack == null){
      let newAnime = new Anime();
      newAnime.id = listPerso.animeId;
      //console.log(newAnime);
      this.serviceAnime.addAnime(newAnime).subscribe((ok:any) =>{       
        this.serviceListPerso.addListPerso(listPerso).subscribe();
      });
    }
    else{    
      this.serviceListPerso.addListPerso(listPerso).subscribe();
    }
  });
}

}
