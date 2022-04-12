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
listAnimesInList : Array<ListPerso>
user: User;

  constructor(private router: Router, private route: ActivatedRoute, private service: ListPersoService) { 
    this.api = require('ouranilist-api');
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
    }
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.getAnimesFromListPerso();
  }

  async getAnimesFromListPerso() {
    this.service.getAllListPersosByUserId(this.user.id).subscribe(data =>{
      this.listAnimesInList = data
      //console.log(this.listAnimesInList)
      this.listAnimesInList.forEach(anime => {
        this.api.GETmediaWithoutToken(anime.animeId).then(animeInfos =>{
          this.listePerso[anime.categoryListPersoId-1].animes.push({ ...anime, ...animeInfos});
          console.log(this.listePerso);
          //switch(anime.categoryListPerso.label){
            //case this.listePerso[0].catName:
            //  this.listePerso[0].animes.push(anime + animeInfos);
0            //  break; }
            //console.log(this.listePerso[1].animes[1].data.Media)
        })
      });
    });
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
   TransformTimeStamp(timeStamp): String{
    var DateTemp = new Date(timeStamp*1000);
    var DateTMSTP = DateTemp.toDateString() + ", " + DateTemp.toLocaleTimeString();
   return DateTMSTP;
 }

}
