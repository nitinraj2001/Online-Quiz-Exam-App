import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestions(quesId:any){
     return this.http.get(`${baseUrl}/question/admin/${quesId}`);
  }
}
