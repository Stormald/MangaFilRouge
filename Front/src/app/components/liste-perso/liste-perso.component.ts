import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models';
import { Category } from 'src/app/models/category.model';
import { ListPerso } from 'src/app/models/listPerso.model';
import { ListPersoService } from 'src/app/services/listPerso.service';
declare var require: any;

@Component({
  selector: 'app-liste-perso',
  templateUrl: './liste-perso.component.html',
  styleUrls: ['./liste-perso.component.css']
})
export class ListePersoComponent implements OnInit {

  api: any;
  listePerso: Array<Category> = [{
    catName: 'PLANNING',
    animes: []
  }, {
    catName: 'WATCHING',
    animes: []
  }, {
    catName: 'COMPLETED',
    animes: []
  }, {
    catName: 'PAUSED',
    animes: []
  }, {
    catName: 'DROPPED',
    animes: []
  }];
  listAnimesInList: Array<ListPerso> = [];
  user: User;
  page: number = 0;
  lastPage: number = 0;

  constructor(private router: Router, private service: ListPersoService) {
    this.api = require('ouranilist-api');
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    if (this.user != null) {
      this.getAnimesFromListPerso();
    }
  }

  async getAnimesFromListPerso() {
    this.service.getAllListPersosByUserId(this.user.id).subscribe(async data => {
      if (data != null) {
        this.listAnimesInList = data.sort(x => x.animeId)
        //console.log(data);
      }
      //console.log(this.listAnimesInList)
      let animeIds: number[] = [];

      let animeIdsString = "[";
      this.listAnimesInList.forEach(anime => {
        animeIds.push(anime.animeId);
        animeIdsString = animeIdsString.concat(animeIds + ",");
      });
      
      //console.log(animeIdsString);
      animeIdsString = animeIdsString.slice(0, -1);
      animeIdsString += "]";

      //console.log(animeIds)
      //console.log(animeIdsString);

      await this.getAnimesInfos(animeIdsString);
    });
  }


  private async getAnimesInfos(animeIdsString: string) {
    let index = 0;

    do {
      this.page += 1;
      await this.api.GETmediaWithLittleInfosWithoutToken("ANIME", this.page, 50, animeIdsString).then(animeInfos => {

        //console.log(animeInfos);
        let liste = animeInfos.data.Page.media.sort(x => x.id);
        this.page = animeInfos.data.Page.pageInfo.currentPage;
        this.lastPage = animeInfos.data.Page.pageInfo.lastPage;
        for (; index < liste.length; index++) {
          this.listePerso[this.listAnimesInList[index].categoryListPersoId - 1].animes.push({ ...this.listAnimesInList[index], ...liste[index] });;
        }
        //console.log(animeInfos.data.Page.pageInfo);
        //console.log(animeInfos.data.Page.pageInfo.lastPage);
      });

      //console.log(this.page + " : " + this.lastPage);
    } while (this.page != this.lastPage);
    return index;
  }

  goToDetailAnime(id: number) {
    //console.log(id);
    this.router.navigate(['/animes', id]);
  }

  /**
   * @description Convertie un Unix timestamp en string
   * @param timeStamp 
   * @returns String
   */
  TransformTimeStamp(timeStamp): String {
    var DateTemp = new Date(timeStamp * 1000);
    var DateTMSTP = DateTemp.toDateString() + ", " + DateTemp.toLocaleTimeString();
    return DateTMSTP;
  }

}
