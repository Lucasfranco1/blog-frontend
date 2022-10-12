import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequestDTO } from 'src/app/model/AuthRequestDTO';
import { JwtDTO } from 'src/app/model/JwtDTO';
import { RegisterPayload } from 'src/app/model/Register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = "http://localhost:8086/auth/";

  constructor(private httpClient: HttpClient) { }

  public new(userDTO: RegisterPayload): Observable<any> {
    return this.httpClient.post<any>(this.authURL+'register', userDTO);
  }
  public login(auth: AuthRequestDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL+'login', auth);
  }
}