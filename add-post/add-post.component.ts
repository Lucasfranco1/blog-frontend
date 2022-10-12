import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostPayload } from '../model/postEntity';
import { TokenService } from '../services/auth/token.service';
import { PostService } from '../services/post.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
    

  newTitle: string = "";
  newContent: string = "";
  username: string = "";

  isLogged = false;

  constructor(private postService: PostService, private router: Router, private token:TokenService ) { }

  ngOnInit(): void {
   this.isLogged = this.token.isLogged();
   this.username = this.token.getToken();

    
    
  }


  addPost() {   
    const post = new PostPayload(this.newTitle, this.newContent, this.username);
      this.postService.newPost(post).subscribe(
        {
          
            next: data => {
            alert("post guardado");
            this.router.navigate([''])
         }, error: err =>{
            alert("Falló");
            this.router.navigate([''])
         }           
        })
    }

    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
      toolbarHiddenButtons: [
        ['bold']
        ],
      customClasses: [
        {
          name: "quote",
          class: "quote",
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1",
        },
      ]
    };

   

   
  }
    

