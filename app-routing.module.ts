import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { PostComponent } from './post/post.component';




import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './services/guards/guard.service';


const routes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},      
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},      
      {path: 'add-post', component: AddPostComponent, canActivate: [GuardService],  data: { expectedRol: ['user'] }},
      {path: 'home', component: HomeComponent},
      {path: 'post/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
