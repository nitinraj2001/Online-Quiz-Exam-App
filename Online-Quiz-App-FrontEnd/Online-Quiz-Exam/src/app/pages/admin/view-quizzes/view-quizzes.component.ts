import { QuizService } from './../../../service/quiz.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any=[{
    "qid":0,"title":'',"description":'',"numberOfQuestions":'',"maxMarks":"","active":false,"category":{}
  }]
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe(
      (data)=>{
        console.log(data);
        this.quizzes=data;
      },
    (error)=>{
    console.log(error);
    Swal.fire("err!!","sorry quizzes can't be loaded due to some errors!","error")
  });}
}
