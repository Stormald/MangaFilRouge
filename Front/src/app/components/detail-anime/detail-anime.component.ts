import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
declare var require: any; 

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.css']
})
export class DetailAnimeComponent implements OnInit {

  id : number;
  nom: { GETmediaWithoutToken: (arg0: number) => Promise<any>; } ; 
  dataAnime: any ; 
  studio: any;
  isReadMore = true
  ShowReadMore = false
  timeNum: number;
  jour: number;
  heure: number;
  min: number;
  Reste: number;
  DateNextEpisode : String;

  constructor(private route : ActivatedRoute, private router: Router) {
    this.nom = require('ouranilist-api'); 
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getAnime(this.id);
  }
  

  /**
   * @description Get anime object by his id
   * @param id id d'un anime 
   */
  async getAnime(id : number)
  {
    var anime = await this.nom.GETmediaWithoutToken(id)
    .then((dataR: any) => {
      console.log(dataR);
      this.TransformNextAiringData(dataR);
      this.ReadMoreControl(dataR.data.Media.description);
      //this.DateNextEpisode = this.TransformTimeStamp(dataR.data.Media.nextAiringEpisode.airingAt);
      }
    ); 
  }

  /**
   * @description affectation et transformation du next airing data d'anime
   * @param dataIn 
   */
   TransformNextAiringData(dataIn){
    if(dataIn.data.Media.nextAiringEpisode != null){
      this.timeNum = dataIn.data.Media.nextAiringEpisode.timeUntilAiring;
      this.convertirSecEnJourHeureMin(this.timeNum);
    }
    this.dataAnime = dataIn;
  }

  /**
   * @description Convertie un Unix timestamp en date
   * @param timeStamp 
   * @returns String
   */
  TransformTimeStamp(timeStamp): String{
     var DateTemp = new Date(timeStamp*1000);
     var DateTMSTP = DateTemp.toDateString() + ", " + DateTemp.toLocaleTimeString();
    return DateTMSTP;
  }

  /**
   * @description convertie un nombre de seconde en jour heure minute
   * @param Time temps en seconde
   */
  convertirSecEnJourHeureMin(Time: number)
  {
    this.jour = Math.floor(Time/86400);
    this.Reste = (Time%86400);
    
    this.heure = Math.floor(this.Reste/3600);
    this.Reste = (this.Reste%3600);
    
    this.min = Math.floor(this.Reste/60);
    
  }
  /**
   * @description Verifie si la taille du texte de la description d'un anime >650 pour afficher ou nom le btn read more
   * Short description animeid 132405
   * 
   * @param data 
   * 
   * @example this.ReadMoreControl(String)
   * 
   */
  ReadMoreControl(data){
    if (data.length > 650) {
      this.ShowReadMore = true;
    } else {
      this.ShowReadMore = false;
    }
  }
  /**
   * @description navigate vers la page detail-anime en passant un id d'anime
   * @param id 
   */
  goToDetailAnime(id: number) {
    console.log(id);
    this.router.navigate(['/animes', id]);
  }
  
  /**
   * @description Change la valeur boolenne de isReadMore
   */
  showText() {
     this.isReadMore = !this.isReadMore
  }
  
}
