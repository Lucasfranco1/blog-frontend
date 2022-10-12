import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//interceptor
import { interceptorProvider } from './services/interceptors/interceptor.service';
import { AddPostComponent } from './add-post/add-post.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { AngularEditorModule } from '@kolkov/angular-editor';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPostComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
    AddPostComponent,
    RegisterComponent,
    RegisterSuccessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,

    
    
    

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
