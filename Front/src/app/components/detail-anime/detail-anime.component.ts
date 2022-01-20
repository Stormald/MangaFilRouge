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
  studio: any; 
    
  async getAnime()
  {
    var anime = await this.nom.GETmediaWithoutToken((17)); 
    console.log(anime); 
    this.dataAnime = anime; 
    this.dataAnime.data.Media.studios.nodes.forEach((element: any) => {
      this.studio += element;
      console.log(this.studio);
    });
  } 

}
