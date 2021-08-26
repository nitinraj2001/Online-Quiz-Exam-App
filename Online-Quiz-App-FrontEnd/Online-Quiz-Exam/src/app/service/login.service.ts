import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  generatejwtToken(userData:any){
     return this.http.post(`${baseUrl}/generate-token`,userData);
  }

  loginUser(token){
    localStorage.setItem("token",token);
    return true;
  }

  IsloggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==null||tokenStr==''||tokenStr==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setUserDetails(user:any){
    localStorage.setItem("user",JSON.stringify(user));
    return true;
  }

  getUserDetails(){
    let userdetailsStr=localStorage.getItem("user");
    if(userdetailsStr!=null){
    return JSON.parse(userdetailsStr);
    }
    else{
      this.logout();
      return null;
    }
  }
}
