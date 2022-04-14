import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Manga } from 'src/app/models/manga.model';
import { UsersService } from 'src/app/services';
import { MangaService } from 'src/app/services/manga.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-manga',
  templateUrl: './upload-manga.component.html',
  styleUrls: ['./upload-manga.component.css']
})
export class UploadMangaComponent implements OnInit {

  FormUploadManga: FormGroup;
  folder: string = "";
  listFiles: Array<string> = [];
  theFiles: Array<any>;
  theFile: any;
  constructor(private router: Router, private service: MangaService, private serviceUpload: UploadService) {
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
      this.folder = this.FormUploadManga.get("title").value;
      let path_folder = "";
      this.listFiles.forEach(filename => {
        path_folder += this.folder.concat("/"+filename);
      });
    
      var input = document.querySelectorAll('input');

      if (input[3].files.length === 0) {
        return;
      }

      let fileToUpload = <File>input[2].files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);

      let filenameSplit = fileToUpload.name.split(".");
      let newFileName = this.folder + "." + filenameSplit[filenameSplit.length-1];

      this.serviceUpload.uploadToCopyFrontPicture(formData, newFileName).subscribe();

      let filesToUpload : File[] = [];
      for (let index = 0; index < input[3].files.length; index++) {
        filesToUpload.push(<File>input[3].files[index]);
        
      }
      const formDataMulti = new FormData();
        
      Array.from(filesToUpload).map((file, index) => {
        return formDataMulti.append('file'+index, file, file.name);
      });

      this.serviceUpload.uploadToCopyPages(formDataMulti, this.folder).subscribe();

      let manga : Manga = {id: 0, status: "ACCEPTED", title: this.folder, front_Picture: "assets/Mangas-Amateurs/"+newFileName, path_Folder: path_folder, userId: user.id}  
  

      this.service.addManga(manga).subscribe();

      this.router.navigate(['/liste-manga']);
    }else{
      alert("You need to be logged in order to add a manga.");
    }
  }

  selectFolder(e) {
    this.theFiles = e.target.files;
    for (let index = 0; index < this.theFiles.length; index++)  {
      this.listFiles.push(this.theFiles[index].name+";");
    }
    //console.log(this.theFiles);
  }

  selectFile(e) {
    //console.log("Prob");

    this.theFile = e.target.file;
    //console.log(this.theFile);
  }
}
