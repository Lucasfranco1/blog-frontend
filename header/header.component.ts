import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  isLogged = false;
  constructor(private token: TokenService) { 
  }

  
  
  ngOnInit(): void {   
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }  
    this.isAdmin = this.token.isUser();
  }
  onLogOut(): void{
    this.token.logOut();
    window.location.reload();
        
  }

}
