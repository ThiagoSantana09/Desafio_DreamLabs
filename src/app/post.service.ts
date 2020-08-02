import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

import { DESAFIO_API } from './app.api';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  posts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${DESAFIO_API}`);
  }
  postById(id: number): Observable<Post> {
    return this.http.get<Post>(`${DESAFIO_API}/${id}`);
  }
}
