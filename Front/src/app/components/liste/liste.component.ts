import { Component, OnInit } from '@angular/core';
declare var require: any;
// import Anime from 'ouranilist-api';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  nom : any;
  liste : Array<any>;

  constructor() {
    this.nom = require('ouranilist-api');
    this.liste = [];
  }

  ngOnInit(): void {
    this.getAnime();
  }


  async getAnime(){
    
    var anime = await this.nom.SEARCHmediasWithoutToken(null, "ANIME", 1, 30);
    this.liste = anime.data.Page.media;
    console.log(anime);
    console.log(this.liste);
  }
}
