import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadToCopyFrontPicture(upload, filename) {
    return this.http.post(`${environment.apiUrl}/Upload/FrontPicture/${filename}`, upload);
  }

  uploadToCopyPages(uploads, folder) {
    return this.http.post(`${environment.apiUrl}/Upload/PathFolder/${folder}`, uploads);
  }

}
