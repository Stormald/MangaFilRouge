import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manga } from 'src/app/models/manga.model';
import { MangaService } from 'src/app/services/manga.service';
declare var require: any;

@Component({
  selector: 'app-detail-manga-amateur',
  templateUrl: './detail-manga-amateur.component.html',
  styleUrls: ['./detail-manga-amateur.component.css']
})
export class DetailMangaAmateurComponent implements OnInit {

id: number;
currentManga: Manga;
listPages: Array<any> = [];
folder: string;

  constructor(private route: ActivatedRoute, private service: MangaService) { 
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    //let fs = require('fs');
    this.service.getManga(this.id).subscribe(data =>{
      //console.log(data);
      this.currentManga = data;
      this.currentManga.path_Folder.split(";").sort().forEach(element => {
        if(element!="")
        this.listPages.push("assets/Mangas-Amateurs/"+element);
      });
      //document.getElementById("path_folder").
      ///Front/src/assets/Mangas-Amateurs/'+ this.currentManga.path_Folder
      //this.listPages = fs.readdir("/");
      //this.listPages.then((value) => {
      //  console.log(value);
      //});
      //console.log(this.listPages);
    })
  }

}
