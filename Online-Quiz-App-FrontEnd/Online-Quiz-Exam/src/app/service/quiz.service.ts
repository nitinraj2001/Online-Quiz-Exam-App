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

  public getAllActiveQuiz(){
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  public getAllActiveQuizOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

  

  public getAllQuizzesByCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/Bycategory/${cid}`);
  }

  public getQuiz(qid:any){
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/add`,quiz);
  }

  public updatetheQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/updateQuiz`,quiz);
  }

  public deleteQuiz(qid:any){
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

}
