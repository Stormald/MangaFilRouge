import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Manga } from '../models/manga.model';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }


  getManga(id: number) : Observable<Manga> {
    return this.http.get<Manga>(`${environment.apiUrl}/MangaAmateur/${id}`);
  }

  getAllMangas() {
    return this.http.get<Manga[]>(`${environment.apiUrl}/MangaAmateur`);
  }

  addManga(manga: Manga) {
    return this.http.post(`${environment.apiUrl}/MangaAmateur`, manga);
  }

  updateManga(manga: Manga) {
    return this.http.put(`${environment.apiUrl}/MangaAmateur`, manga);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/MangaAmateur/${id}`);
  }
}
