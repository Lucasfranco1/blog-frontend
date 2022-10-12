import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequestDTO } from 'src/app/model/AuthRequestDTO';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: AuthRequestDTO;  
 
  
  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])

    
  })
  errMessage: string;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router ) { 
      
      
  
    }

  ngOnInit(): void {
  }
  onLogin(): void {      
    
    this.authService.login(this.loginForm.value).subscribe({
      next: data => {      
        this.tokenService.setToken(data.token);   
        this.router.navigate(['']);
        //window.location.reload();                        
      },
      error: err => {        
        this.errMessage = err.ParamBadRequest;        
        console.log(this.errMessage);                               
        alert("Usuario o contraseña incorrectos.");          
      }
      
    }
    )
  }       

}
