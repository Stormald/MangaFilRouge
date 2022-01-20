import { Component, OnInit } from '@angular/core';
declare var require: any; 

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.css']
})
export class DetailAnimeComponent implements OnInit {

  constructor() {
    this.nom = require('ouranilist-api'); 
  }

  ngOnInit(): void {
    this.getAnime(); 
  }

  nom : any; 
  dataAnime : any; 
  studio!: string; 
    
  async getAnime()
  {
    var anime = await this.nom.GETmediaWithoutToken((17)); 
    console.log(anime); 
    this.dataAnime = anime; 
  } 

}
