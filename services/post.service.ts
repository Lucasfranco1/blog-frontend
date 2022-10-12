import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../model/postEntity';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  authURL = "http://localhost:8086/posts/";
  constructor(private httpClient: HttpClient) { }

  public newPost(PostPayload: PostPayload): Observable<any> {
    return this.httpClient.post<any>(this.authURL+'create', PostPayload);
  }
  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>(this.authURL+'all');
  }

  getPost(permaLink: string):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>(this.authURL+'get/' + permaLink);
  }
}
