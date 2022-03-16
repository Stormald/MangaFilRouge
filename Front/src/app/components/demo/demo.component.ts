import { Component, OnInit } from '@angular/core';
declare var require: any;
//import {} from 'ouranilist-api';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {

  constructor() {
    this.nom = require('ouranilist-api');
  }
  ngOnInit(): void {
    this.getAnime();
  }

  nom : any;

  async getAnime(){
    //await this.nom.SETtoken('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNjMGYyZjE0NjI3MmFlYWI5M2VlMjZiNzFiYTkzY2RlNzBhZmZkOTg3NmUyNGU3MDU5NGZmZjA4MTE2MmVjYTE3ZTIyODZlMDQ0ODM3YzY5In0.eyJhdWQiOiI3MzE1IiwianRpIjoiY2MwZjJmMTQ2MjcyYWVhYjkzZWUyNmI3MWJhOTNjZGU3MGFmZmQ5ODc2ZTI0ZTcwNTk0ZmZmMDgxMTYyZWNhMTdlMjI4NmUwNDQ4MzdjNjkiLCJpYXQiOjE2NDI1MTY4MjQsIm5iZiI6MTY0MjUxNjgyNCwiZXhwIjoxNjc0MDUyODI0LCJzdWIiOiIzNTY1ODMiLCJzY29wZXMiOltdfQ.aIJ-m3aCV6gtNngvEquuW4swa06FNf4Wb5HfenlCma_TpUkuzo1Z28StOaUdMSjHkqDrUyJ5SgThJFiextCQr_-BwA9EE-vMz6sEQhTIm3FG26FJRq524C5B2bwKPW2z3cIbzTyNyCc_266IXVwgZAjMIhGCtIOL3S-BSFH7emsHn4TuMCQXaFztfWtY7Ixyjtecc9itKvfLeEgl8TFv3mi5aNfv1sBAv5ivv1ua8C_eN8RjkEKaIBhTm7fl_h2tUFHm6uiC4A2XBeVwlcyaIOnptstZH8TFOKFvzH3ZeqfVDC6w74lYyBOg8uo9Sq3O5jJnln8W3FJhEcae1PSrdNfZttq4dnkM35BcQTqdQodq_ZYvZl-QaoUOytDFDlF9txX7JzpPUuFDVYWD1nTN9YnEjz3CnvKEHQmcoboVxhmC1gVW4_MxWQxIFKBQwMiKylO0VfSQlii3vY87kR5oyTChK6MyAG6Dd8Yj9hRGnyEofTM93vG8Gvegd0sC7sJDDN7blqVuKeWduoWgyiMxPX3ElyaZ_ZjxFWeROKkfVG15FlM_49ucwFX2egzye_3p6pThyxSDvwZQCkF74bdvU0iMUJ_9qo3ie529tp-fmCkW0ZGx-z1J8I9_BhRhubdOiXgziakP7vjdQzvblXQQzvJ8H85z8Gh7dDQAt77dOLk');
    
    var anime = await this.nom.SEARCHmediasWithoutToken("One Piece", "ANIME", 1, 25);
    //anime = await this.nom.GETmediaWithoutToken(110789);
    //console.log(anime);
  }
}

