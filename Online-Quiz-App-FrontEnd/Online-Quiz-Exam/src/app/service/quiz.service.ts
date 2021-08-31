import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getAllQuizzes(){
    return this.http.get(`${baseUrl}/quiz/getAllQuiz`);
  }

  public getQuiz(qid:any){
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/add`,quiz);
  }
}
