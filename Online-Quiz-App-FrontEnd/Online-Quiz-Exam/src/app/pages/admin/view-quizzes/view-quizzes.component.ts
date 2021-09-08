import { QuizService } from './../../../service/quiz.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any=[{
    "qid":0,"title":'',"description":'',"numberOfQuestions":'',"maxMarks":"","active":false,"category":{}
  }]
  constructor(private quizService:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe(
      (data)=>{
       // console.log(data);
        this.quizzes=data;
      },
    (error)=>{
      //console.log(error);
      Swal.fire("err!!","sorry quizzes can't be loaded due to some errors!","error")
    }
  );
 }

 deleteQuiz(qid:any){
   Swal.fire({
     icon:'info',title:'Are you sure you want to delete quiz?',confirmButtonText:'Delete',showCancelButton:true
   }).then((result)=>{
     if(result.isConfirmed){
      this.quizService.deleteQuiz(qid).subscribe(
        (data)=>{
          this.quizzes=this.quizzes.filter((quiz)=>quiz.qid!=qid);
          //console.log(data);
          Swal.fire("success!!","quiz is successfully deleted","success");
        },
        (error)=>{
          //console.log(error);
          Swal.fire("err!!","quiz can't be deleted try again!!","error");
        }
      )
     }
   }
   )
  
 }

 sendQuizDetails(qid:any,title:any){
  let titleInRoute: String= title.split(' ').join('-');
   this.router.navigate(['/admin/view-questions',qid,titleInRoute]);
 }
}
