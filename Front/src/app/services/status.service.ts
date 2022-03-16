import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getAllStatus() {
    return this.http.get<Status[]>(`${environment.apiUrl}/CategoryListPerso`);
  }

  addStatus(status: Status) {
    return this.http.post(`${environment.apiUrl}/CategoryListPerso`, status);
  }

  updateStatus(status: Status) {
    return this.http.put(`${environment.apiUrl}/CategoryListPerso`, status);
  }

  deleteStatus(id: number) {
    return this.http.delete(`${environment.apiUrl}/CategoryListPerso/${id}`);
  }
}
