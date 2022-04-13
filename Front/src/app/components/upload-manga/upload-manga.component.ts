import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Manga } from 'src/app/models/manga.model';
import { UsersService } from 'src/app/services';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-upload-manga',
  templateUrl: './upload-manga.component.html',
  styleUrls: ['./upload-manga.component.css']
})
export class UploadMangaComponent implements OnInit {

  FormUploadManga: FormGroup;
  folder: string = "";
  constructor(private router: Router, private service: MangaService) {
    this.FormUploadManga = new FormGroup({
      title: new FormControl(null, Validators.required),
      front_picture: new FormControl(null, Validators.required),
      path_folder: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  uploadManga() {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(user != null){
      let split = this.FormUploadManga.get("front_picture").value.split("\\");
      let manga : Manga = {id: 0, status: "ACCEPTED", title: this.FormUploadManga.get("title").value, front_Picture: "assets/Mangas-Amateurs/"+split[split.length-1], path_Folder: this.folder, userId: user.id}  
      console.log(manga);
      this.service.addManga(manga).subscribe();

      this.router.navigate(['/upload-manga']);
    }else{
      alert("You need to be logged in order to add a manga.");
    }
    //console.log("Title : " + this.FormUploadManga.get("title").value);
    //console.log("Front_Picture : ");
    //console.log(this.FormUploadManga.get("front_picture"));
    //console.log("Path_Folder : ");
    //console.log(this.FormUploadManga.get("path_folder"));
  }

  selectFolder(e) {
    //console.log("Prob");

    var theFiles : Array<any> = e.target.files;
    for (let index = 0; index < theFiles.length; index++)  {
      this.folder+=theFiles[index].webkitRelativePath+";"
    }
   
    //var relativePath = theFiles[0].webkitRelativePath;
    //console.log(theFiles);
    //this.folder = relativePath.split("/")[0];
    //console.log(this.folder);
    //alert(folder[0]);
  }
}
