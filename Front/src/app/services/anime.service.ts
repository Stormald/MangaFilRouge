import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Anime } from '../models/anime.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getAnime(id: number) {
    return this.http.get<Anime>(`${environment.apiUrl}/Anime/${id}`);
  }

  getAllAnimes() {
    return this.http.get<Anime[]>(`${environment.apiUrl}/Anime`);
  }

  addAnime(Anime: Anime) {
    return this.http.post(`${environment.apiUrl}/Anime`, Anime);
  }

  updateAnime(Anime: Anime) {
    return this.http.put(`${environment.apiUrl}/Anime`, Anime);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Anime/${id}`);
  }
}
