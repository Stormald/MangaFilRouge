import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getAllReviews() {
    return this.http.get<Review[]>(`${environment.apiUrl}/Review`);
  }

  addReview(review: Review) {
    return this.http.post(`${environment.apiUrl}/Review`, review);
  }

  updateReview(review: Review) {
    return this.http.put(`${environment.apiUrl}/Review`, review);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Review/${id}`);
  }
}
