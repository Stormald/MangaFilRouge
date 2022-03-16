import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/models/anime.model';
import { Review } from 'src/app/models/review.model';
import { AnimeService } from 'src/app/services/anime.service';
import { ReviewService } from 'src/app/services/review.service';
declare var require: any;

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.css']
})
export class DetailAnimeComponent implements OnInit {

  id: number;
  nom: { GETmediaWithoutToken: (arg0: number) => Promise<any>; };
  dataAnime: any;
  ourDataAnime: Anime;
  studio: any;
  isReadMore = true
  ShowReadMore = false
  timeNum: number;
  jour: number;
  heure: number;
  min: number;
  Reste: number;
  NbRecommandation: number = 4;
  NbReview: number = 4;
  DateNextEpisode: String;
  MoreRecom: boolean = false;
  MoreRev: boolean = false;
  reviewForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private serviceAnime: AnimeService, private serviceReview: ReviewService) {
    this.nom = require('ouranilist-api');
    this.id = route.snapshot.params.id;

    this.reviewForm = new FormGroup({
      scoreControl: new FormControl(null, Validators.required),
      textControl: new FormControl(null, Validators.required)
   });
  }

  ngOnInit(): void {
    this.getAnime(this.id);
    this.getAnimeInfosInOurBack(this.id);
  }

  /**
   * @description Get anime infos (reviews,...) from our own back
   * @param id id d'un anime same as the id in the Anilist API
   */
  async getAnimeInfosInOurBack(id: number) {
    await this.serviceAnime.getAnime(id).subscribe((dataBack: any) => {
      //console.log(dataBack);
      if(dataBack != null){
        //this.ourDataAnime = new Anime();
        this.ourDataAnime = dataBack;
        console.log(this.ourDataAnime.reviews.length);
        if (this.NbReview < this.ourDataAnime.reviews.length) {
          this.MoreRev = true;
        }
      }
      //console.log(this.ourDataAnime);
    }
    );
  }

  addAnimeIfNeccessary(review : Review) {
    if (this.ourDataAnime == null) {
      let newAnime = new Anime();
      newAnime.id = this.id;
      //console.log(newAnime);
      this.serviceAnime.addAnime(newAnime).subscribe((ok:any) =>{       
        this.serviceReview.addReview(review).subscribe((dataBack: any) => {
          //console.log(dataBack);
          this.getAnimeInfosInOurBack(this.id);
        });
      });
    }
    else{    
        this.serviceReview.addReview(review).subscribe((dataBack: any) => {
          //console.log(dataBack);
          this.ourDataAnime.reviews.push(dataBack);
        });
    }
  }

  addReview() {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(user != null){
      let review = new Review();
      review.scoreReview = this.reviewForm.get("scoreControl").value;
      review.text = this.reviewForm.get("textControl").value;
      review.userId = user.id;
      review.animeId = this.id;
  
      this.addAnimeIfNeccessary(review);
  
      this.reviewForm.reset();
    }
    else{
      alert("You need to be logged in order to post a review.");
    }


  }


  /**
   * @description Get anime object by his id
   * @param id id d'un anime 
   */
  async getAnime(id: number) {
    await this.nom.GETmediaWithoutToken(id)
      .then((dataR: any) => {
        //console.log(dataR);
        this.dataAnime = dataR;
        this.TransformNextAiringData(dataR);
        this.ReadMoreControl(dataR.data.Media.description);
        if (this.NbRecommandation < this.dataAnime.data.Media.recommendations.nodes.length) {
          this.MoreRecom = true;
        }
      }
      );
  }

  /**
   * @description affectation et transformation du next airing data d'anime
   * @param dataIn 
   */
  TransformNextAiringData(dataIn) {
    if (dataIn.data.Media.nextAiringEpisode != null) {
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
  TransformTimeStamp(timeStamp): String {
    var DateTemp = new Date(timeStamp * 1000);
    var DateTMSTP = DateTemp.toDateString() + ", " + DateTemp.toLocaleTimeString();
    return DateTMSTP;
  }

  /**
   * @description convertie un nombre de seconde en jour heure minute
   * @param Time temps en seconde
   */
  convertirSecEnJourHeureMin(Time: number) {
    this.jour = Math.floor(Time / 86400);
    this.Reste = (Time % 86400);

    this.heure = Math.floor(this.Reste / 3600);
    this.Reste = (this.Reste % 3600);

    this.min = Math.floor(this.Reste / 60);

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
  ReadMoreControl(data) {
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
    //console.log(id);
    this.router.navigate(['/animes', id]);
  }

  /**
   * @description Augmente le nombre de recommandations de 5 en 5 jusqu'au max et enleve le btn en passant MoreRecon à vrai
   */
  MoreReco() {
    //console.log(this.dataAnime.data.Media.recommendations.nodes.length);
    if (this.NbRecommandation + 5 < this.dataAnime.data.Media.recommendations?.nodes.length) {
      this.NbRecommandation = this.NbRecommandation + 5;
      //console.log(this.NbRecommandation);
    } else {
      this.NbRecommandation = this.dataAnime.data.Media.recommendations?.nodes.length;
      this.MoreRecom = false;
    }
  }

  MoreReview() {
    //console.log(this.dataAnime.data.Media.reviews.edges.length);
    if (this.NbReview + 5 < this.ourDataAnime?.reviews.length) {
      this.NbReview = this.NbReview + 5;
      //console.log(this.NbReview);
    } else {
      this.NbReview = this.ourDataAnime?.reviews.length;
      this.MoreRev = false;
    }
  }

  /**
   * @description Change la valeur boolenne de isReadMore
   */
  showText() {
    this.isReadMore = !this.isReadMore
  }

}
