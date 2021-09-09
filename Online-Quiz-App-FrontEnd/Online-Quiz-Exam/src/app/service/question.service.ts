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

  public getQuestionsOfQuiz(qid:any){
    return this.http.get(`${baseUrl}/question/${qid}`);
  }

  public getQuestion(quesId:any){
    return this.http.get(`${baseUrl}/question/ById/${quesId}`);
 }

  public addQuestion(question: any){
    return this.http.post(`${baseUrl}/question/add-questions`,question);
  }

  public updateQuestion(question: any){
    return this.http.put(`${baseUrl}/question/update-questions`,question);
  }

  public deleteQuestion(qid:any){
    return this.http.delete(`${baseUrl}/question/${qid}`);
  }

  public evaluateQuiz(question:any){
    return this.http.post(`${baseUrl}/question/evaluate-quiz`,question);
  }
}
