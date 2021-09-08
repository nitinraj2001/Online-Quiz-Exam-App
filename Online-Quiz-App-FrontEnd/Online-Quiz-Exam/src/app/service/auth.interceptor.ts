import { LoginService } from './login.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginservice:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq=req;
        let token=this.loginservice.getToken();
        //console.log("jwt token is "+token);
        if(token!=null){
            authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
           // console.log("auth request is: "+JSON.stringify(authReq));
        }
        return next.handle(authReq);
    }

}