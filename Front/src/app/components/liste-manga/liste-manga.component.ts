import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manga } from 'src/app/models/manga.model';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-liste-manga',
  templateUrl: './liste-manga.component.html',
  styleUrls: ['./liste-manga.component.css']
})
export class ListeMangaComponent implements OnInit {

listManga: Array<Manga> = []; 

  constructor(private router: Router, private service: MangaService) { }

  ngOnInit(): void {
    this.service.getAllMangas().subscribe(data =>{
      this.listManga = data;
      //console.log(this.listManga[0]);
    });
  }

  
  addManga(){
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(user != null){
    this.router.navigate(['/upload-manga']);
    }else{
      alert("You need to be logged in order to add a manga.");
    }
  }

  goToMangaAmateur(id: number){
    this.router.navigate(['/manga-amateur', id]);
  }


}
