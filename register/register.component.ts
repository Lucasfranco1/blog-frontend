import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPayload } from '../model/Register';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerPayload: RegisterPayload;

  errMessage : string;
  registerForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),    
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),    

  });

  constructor(private authService: AuthService, private router:Router) {}
  

  ngOnInit(): void {
  }
  
  onSubmit() {        
    this.authService.new(this.registerForm.value).subscribe({
      next: data => {
        this.router.navigate(['register-success']);
      },
      error: err =>{
        this.errMessage = err.ParamBadRequest;        
        console.log(this.errMessage);                               
        alert("Usuario o contraseña incorrectos.");   
      }
    })
   
  }

}
