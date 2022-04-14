import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StatusService } from 'src/app/services/status.service';
import { ListPerso } from 'src/app/models/listPerso.model';
import { ListPersoService } from 'src/app/services/listPerso.service';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/models/anime.model';
import { User } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal-add-to-my-list',
  templateUrl: './modal-add-to-my-list.component.html',
  styleUrls: ['./modal-add-to-my-list.component.css']
})
export class ModalAddToMyListComponent implements OnInit {

  @Input() anime: any;
  animeId: number;
  currentRate = 0;
  FormAddList: FormGroup;
  dataStatus: any;
  user: User;
  inList: ListPerso;

  constructor(config: NgbModalConfig, private route: ActivatedRoute, private modalService: NgbModal, private serviceStatus: StatusService, private serviceAnime: AnimeService, private serviceListPerso: ListPersoService) {
    config.backdrop = true;
    config.keyboard = false;

    this.FormAddList = new FormGroup({
      StatusControl: new FormControl(null, Validators.required),
      checked: new FormControl(null, Validators.required),
      Episode: new FormControl(null, Validators.required),
      favorites: new FormControl(null, Validators.required)
    });

    this.animeId = route.snapshot.params.id;
  }

  ngOnInit(): void {
    // GET LIST DES STATUS BACK
    this.getStatusListPersoInOurBack();
    this.getInfosIfAnimeInListFromConnectedUser();
  }

  initFormValue() {
    if (this.inList == null) {
      this.FormAddList.get("checked").setValue(false);
      this.FormAddList.get("Episode").setValue(0);
      this.FormAddList.get("favorites").setValue(false);
    }
  }

  async getStatusListPersoInOurBack() {
    await this.serviceStatus.getAllStatus()
      .subscribe((dataR: any) => {
        //console.log(dataR);
        this.dataStatus = dataR;
        //console.log(this.dataStatus[1]);
        this.FormAddList.get("StatusControl").setValue(this.dataStatus[1]);
      }
      );
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
    this.getInfosIfAnimeInListFromConnectedUser(); 
  }

  addToMyList(obj: any) {
    if (this.user != null) {
      let listPerso = new ListPerso();
      listPerso.userId = this.user.id;
      listPerso.categoryListPersoId = this.FormAddList.get("StatusControl").value.id;
      listPerso.privacy = this.FormAddList.get("checked").value;
      listPerso.score = this.currentRate;
      listPerso.progression = this.FormAddList.get("Episode").value;
      listPerso.favorite = this.FormAddList.get("favorites").value;
      listPerso.animeId = obj.data.Media.id;

      this.addAnimeIfNeccessary(listPerso);

      document.getElementById("openModalButton").innerHTML = "Modify in My List <i class='fa fa-heart-o'>";
      document.getElementById("closeModalButton").click();
    }
    else {
      alert("You need to be logged in order to add an anime to your list.");
    }
  }

  async addAnimeIfNeccessary(listPerso: ListPerso) {
    await this.serviceAnime.getAnime(listPerso.animeId).subscribe((dataBack: any) => {
      if (dataBack == null) {
        let newAnime = new Anime();
        newAnime.id = listPerso.animeId;
        
        this.serviceAnime.addAnime(newAnime).subscribe((ok: any) => {
          this.serviceListPerso.addListPerso(listPerso).subscribe();
        });
        
      }
      else {
        if(this.inList != null){
          this.serviceListPerso.updateListPerso(listPerso).subscribe();
        }
        else{
        this.serviceListPerso.addListPerso(listPerso).subscribe();
        }
      }
    });
  }


  getInfosIfAnimeInListFromConnectedUser() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (this.user != null) {
      this.serviceListPerso.getListPerso(this.user.id, this.animeId).subscribe(data => {
        if (data != null) {
          this.inList = data;
          console.log(this.inList)
          this.currentRate = this.inList.score;
          this.FormAddList.get("checked").setValue(this.inList.privacy);
          this.FormAddList.get("favorites").setValue(this.inList.favorite);
          this.FormAddList.get("Episode").setValue(this.inList.progression);
          //this.FormAddList.get("StatusControl").setValue(this.inList.categoryListPerso);
          this.FormAddList.get("StatusControl").setValue(this.dataStatus[this.inList.categoryListPersoId - 1]);

          document.getElementById("openModalButton").innerHTML = "Modify in My List <i class='fa fa-heart-o'>";
          if(document.getElementById("validateButton") != null)
          document.getElementById("validateButton").innerText = "MODIFY";

          console.log(this.inList);
        }
        else {
          this.initFormValue();
        }
      });
    }
    else {
      this.initFormValue();
    }
  }

}
