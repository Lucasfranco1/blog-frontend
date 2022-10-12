import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPayload } from 'src/app/model/postEntity';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostPayload;
  permaLink: string;

  constructor(private router: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.postService.getPost(this.permaLink).subscribe((data:PostPayload) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }
 

}
