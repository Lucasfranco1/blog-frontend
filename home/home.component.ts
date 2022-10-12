import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../model/postEntity';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Observable<Array<PostPayload>>;
  j  = false;
  constructor(private postService: PostService) { }

  

  ngOnInit(): void {
    
    this.getAllPost();
  }
  getAllPost():void{
    this.posts = this.postService.getAllPosts();         
  }

}
