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
  //anime : any;
  page : number;
  lastPage : number;
  //cpt : number;

  constructor() {
    //this.cpt = 0;
    this.nom = require('ouranilist-api');
    this.liste = [];
  }

  ngOnInit(): void {
    this.getAnime();
  }

  async getAnime(){
    await this.nom.SEARCHmediasWithoutToken("One Piece", "ANIME", 1, 10).then(data =>{
      this.liste = data.data.Page.media;
      this.page = data.data.Page.pageInfo.currentPage;
      this.lastPage = data.data.Page.pageInfo.lastPage;
    }
      );
    
    //console.log(anime);
    //console.log(this.liste);
  }

  onScrollDown(ev: any) {
    if(this.page != this.lastPage){
      console.log("scrolled down!!", ev);
      //this.cpt++;
      this.appendItems();
    }
  }

  async appendItems(){
    this.page++;
    await this.nom.SEARCHmediasWithoutToken("One Piece", "ANIME", this.page, 10).then(data => {
      this.liste = this.liste.concat(data.data.Page.media); 
      this.lastPage = data.data.Page.pageInfo.lastPage;
      console.log(this.liste);
    }); 
  }
}
