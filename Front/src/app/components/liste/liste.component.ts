import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  myFilter : any;
  searchName : string;
  mediaType : string;
  //cpt : number;

  constructor(private router : Router) {
    //this.cpt = 0;
    this.nom = require('ouranilist-api');
    this.liste = [];
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    this.getAnime();
  }

  async getAnime(){
    this.myFilter = { 
      sort: ["TRENDING_DESC"], 
      //status: "RELEASING",
      isAdult: false
    };
    this.searchName="";
    this.mediaType="ANIME";
    await this.nom.SEARCHmediasWithoutToken(this.searchName, this.mediaType, 1, 12, this.myFilter).then(data =>{
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
    if(this.page == 1){
      this.page = 3;
    }
    else
    this.page++;
    await this.nom.SEARCHmediasWithoutToken(this.searchName, this.mediaType, this.page, 6, this.myFilter).then(data => {
      this.liste = this.liste.concat(data.data.Page.media); 
      this.lastPage = data.data.Page.pageInfo.lastPage;
      console.log(this.liste);
    }); 
  }

  goToDetailAnime(id : number){
    console.log(id);
    this.router.navigate(['/animes', id]);
  }
}
