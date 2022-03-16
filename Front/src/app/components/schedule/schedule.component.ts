import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Day } from 'src/app/models/day.model';


declare var require: any;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  nom: any;
  week: Array<Day> = [];
  currentDate: Date;
  inSixDayDate: Date = new Date();
  page: number = 1;
  lastPage: number;
  dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Thursday", "Saturday"];

  constructor(private router: Router, private route: ActivatedRoute) {
    //this.cpt = 0;
    this.nom = require('ouranilist-api');
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.route.params.subscribe(
      params => {
        if(params['date'] != null){
          this.currentDate = new Date(new Date(params['date']).toDateString());
        }
      });

    if(this.currentDate == null){
      this.currentDate = new Date(new Date().toDateString());
    }
    this.inSixDayDate.setDate(this.currentDate.getDate()+6);
  }

  ngOnInit(): void {
    this.getAnimes();
  }

  goToDetailAnime(id: number) {
    this.router.navigate(['/animes', id]);
  }

  addSevenDays() : string{
  let newDateAdd = new Date();
  newDateAdd.setDate( this.currentDate.getDate() + 7 );
   return newDateAdd.toDateString();
  }

  subSevenDays() : string{
    let newDateSub= new Date();
    newDateSub.setDate( this.currentDate.getDate() - 7 );
    return newDateSub.toDateString();
  }

  /**
   * @description Convertie un temps en seconde en string
   * @param timeStamp 
   * @returns String
   */
   TransformTimeUntilAiring(timeInSeconds : number): String{
     let text : string = "";
     if(timeInSeconds<=0){
       text = "0d 00h 00m 00s ";
     }
     else{
      let groupSecondes = [ {"value":86400,"letter":"d"}, {"value":3600,"letter":"h"}, {"value":60,"letter":"m"}, {"value":1,"letter":"s"} ];

      for (let elemSeconde of groupSecondes)
      {
        let division = Math.floor(timeInSeconds/elemSeconde.value);
        timeInSeconds -= (division * elemSeconde.value);
        var formattedNumber = ("0" + division).slice(-2);
        text+=formattedNumber+elemSeconde.letter+" ";
      }
    }
     
     return text.substr(0, text.length - 1);
 }

async getAnimes() {
  let day0 = new Date();
  day0.setDate(this.currentDate.getDate());
  let day1 = new Date();
  day1.setDate(this.currentDate.getDate()+1);
  let day2 = new Date();
  day2.setDate(this.currentDate.getDate()+2);
  let day3 = new Date();
  day3.setDate(this.currentDate.getDate()+3);
  let day4 = new Date();
  day4.setDate(this.currentDate.getDate()+4);
  let day5 = new Date();
  day5.setDate(this.currentDate.getDate()+5);
  let day6 = new Date();
  day6.setDate(this.currentDate.getDate()+6);

  do{
  await this.nom.SEARCHscheduleWithoutToken(Math.floor(this.currentDate.getTime()/1000), Math.floor(this.inSixDayDate.getTime()/1000), this.page, 50).then(data => {
    for(let schedule of data.data.Page.airingSchedules){
      if(schedule.media.format != "ONA"){
      let dateSortieEpisode = new Date(schedule.airingAt*1000);
      switch (dateSortieEpisode.getDate()) {
        case day0.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[0].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        case day1.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[1].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        case day2.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[2].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        case day3.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[3].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        case day4.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[4].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        case day5.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[5].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        case day6.getDate():
          if(this.week.findIndex(day => day.index==dateSortieEpisode.getDay()) != -1){
            this.week[6].airingMedia.push(schedule);
          }
          else{
            this.week.push({index: dateSortieEpisode.getDay(), name: this.dayOfTheWeek[dateSortieEpisode.getDay()], airingMedia: [schedule]});
          }
          break;
        default:
          console.log(`Problem with ${dateSortieEpisode.getDate()} not in ${day0.getDate()} to ${day6.getDate()} : ${dateSortieEpisode.toLocaleDateString()}.`);
      }
    }
    }
    this.page = data.data.Page.pageInfo.currentPage+1;
    this.lastPage = data.data.Page.pageInfo.lastPage;
  });
  
  /*if (this.page-1 != this.lastPage){
    console.log(this.page-1 + " ---- " + this.lastPage);
    console.log("Continue");
  }*/

  }while(this.page-1 != this.lastPage);
}

}
