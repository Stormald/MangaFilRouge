import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ListPerso } from '../models/listPerso.model';

@Injectable({
  providedIn: 'root'
})
export class ListPersoService {

  constructor(private http: HttpClient) { }

  getListPerso(idUser: number, idAnime: number) : Observable<ListPerso> {
    return this.http.get<ListPerso>(`${environment.apiUrl}/ListPerso/User/${idUser}/Anime/${idAnime}`);
  }

  getAllListPersosByUserId(id: number) {
    return this.http.get<ListPerso[]>(`${environment.apiUrl}/ListPerso/User/${id}`);
  }

  addListPerso(ListPerso: ListPerso) {
    return this.http.post(`${environment.apiUrl}/ListPerso`, ListPerso);
  }

  updateListPerso(ListPerso: ListPerso) {
    return this.http.put(`${environment.apiUrl}/ListPerso`, ListPerso);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/ListPerso/${id}`);
  }
}
