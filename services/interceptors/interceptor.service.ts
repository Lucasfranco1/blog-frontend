import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../auth/token.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let intReq = request;
    const TOKEN = this.tokenService.getToken();
    if(TOKEN != null){
      intReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer'+TOKEN)
      });
    }
    return next.handle(intReq);
  }

}
export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS, 
  useClass: InterceptorService,
  multi: true
}];