import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public registerUser(theUser:User):Observable<User>{
    return this.http.post<User>(`${baseUrl}/user/`,theUser);
  }


}
