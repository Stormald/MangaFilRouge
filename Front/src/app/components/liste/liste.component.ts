
import { newArray } from '@angular/compiler/src/util';

import { isNull } from '@angular/compiler/src/output/output_ast';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

declare var require: any;
// import Anime from 'ouranilist-api';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  nom: any;
  liste: Array<any>;
  //anime : any;

  page: number;
  searchName: string;
  lastPage: number;
  myFilter: any;
  mediaType: string;

  //cpt : number;

  constructor(private router: Router, private route: ActivatedRoute) {
    //this.cpt = 0;
    this.nom = require('ouranilist-api');
    this.liste = [];
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.route.params.subscribe(
      params => this.searchName = params['searchName']);
  }

  ngOnInit(): void {
    if (this.searchName != null) {
      this.getAnime(this.searchName);
    }
    else
      this.getAnime();
  }

  async getAnime(searchName?: string) {
    this.myFilter = {
      sort: ["TRENDING_DESC","POPULARITY_DESC"],
      //status: "RELEASING",
      isAdult: false
    };
    if(searchName == null){
      this.searchName = "";
    }

    this.mediaType = "ANIME";
    await this.nom.SEARCHmediasWithoutToken(this.searchName, this.mediaType, 1, 16, this.myFilter).then(data => {
      this.liste = data.data.Page.media;
      this.page = data.data.Page.pageInfo.currentPage;
      this.lastPage = data.data.Page.pageInfo.lastPage;
      console.log(data);
    }
    );

    //console.log(anime);
    //console.log(this.liste);
  }

  onScrollDown(ev: any) {
    if (this.page != this.lastPage) {
      console.log("scrolled down!!", ev);
      //this.cpt++;
      this.appendItems();
    }
  }

  async appendItems() {
    if (this.page == 1) {
      this.page = 3;
    }
    else{
      this.page++;
    }
      console.log("search : "+ this.searchName);
    await this.nom.SEARCHmediasWithoutToken(this.searchName, this.mediaType, this.page, 8, this.myFilter).then(data => {
      this.liste = this.liste.concat(data.data.Page.media);
      this.lastPage = data.data.Page.pageInfo.lastPage;
      console.log(this.liste);
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
