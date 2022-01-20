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
  timenum : any;
  jour : any;
  heure :any;
  min :any;
  Reste : any;

  constructor() {
    this.nom = require('ouranilist-api'); 
  }

  ngOnInit(): void {
    this.getAnime(); 
  }

  async getAnime()
  {
    var anime = await this.nom.GETmediaWithoutToken((21))
    .then((dataR: any) => {
        this.timenum = dataR.data.Media.nextAiringEpisode.timeUntilAiring;
        console.log(this.timenum);
        this.convertirSecEnJourHeureMin();
        console.log(dataR); 
        this.dataAnime = dataR; 
      }
    ); 
    
    
  }

  convertirSecEnJourHeureMin()
  {
    
    this.jour = Math.floor(this.timenum/86400);
    console.log(this.jour);
    this.Reste = (this.timenum%86400);
    console.log(this.Reste);
    this.heure = Math.floor(this.Reste/3600);
    console.log(this.heure);
    this.Reste = (this.Reste%3600);
    console.log(this.Reste);
    this.min = Math.floor(this.Reste/60);
    console.log(this.min);
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
