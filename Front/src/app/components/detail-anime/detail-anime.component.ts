import { Component, OnInit } from '@angular/core';
declare var require: any; 

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.css']
})
export class DetailAnimeComponent implements OnInit {

  nom : any; 
  dataAnime : any; 
  studio: any;
  AirSchedule = false;
  isReadMore = true
  constructor() {
    this.nom = require('ouranilist-api'); 
  }

  ngOnInit(): void {
    this.getAnime(); 
  }

  async getAnime()
  {
    var anime = await this.nom.GETmediaWithoutToken((21)); 
    console.log(anime); 
    this.dataAnime = anime; 
    // this.StringinfyParamStudio(this.dataAnime.Media.)
  }
  
  showText() {
     this.isReadMore = !this.isReadMore
  }
  
  VerificationAirSchuduleNotEmpty(ObjAirSchedule: any)
  {
    if (ObjAirSchedule.length>0) {
      this.AirSchedule = true;
    } else {
      this.AirSchedule = false;
    }
  }
  
  StringinfyParamStudio(ObjStudio: any)
  {
    ObjStudio.forEach((element: any) => {
      this.studio += element;
      console.log(this.studio);
    });
  }

}
