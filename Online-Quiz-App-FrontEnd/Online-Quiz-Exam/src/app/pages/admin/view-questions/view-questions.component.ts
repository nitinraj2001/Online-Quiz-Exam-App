import { QuestionService } from './../../../service/question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

   quizId:any;
   title=null;

  questions:any=[{
    quesId:'',answer:'',content:'',option1:'',option2:'',option3:'',option4:'',quiz:{quizId:''},
  },]

  constructor(private router:Router,private route:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.quizId=this.route.snapshot.paramMap.get("qid");
    this.title=this.route.snapshot.paramMap.get("title");
    this.title=this.title.split('-').join(" ");
    console.log("title of the quiz is "+this.title+" quiz id is "+this.quizId);
    this.getQuizQuestions();
  }

  getQuizQuestions(){
    this.questionService.getAllQuestions(this.quizId).subscribe(
      (data)=>{
        this.questions=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire("error!!","questions can't be loaded due to some problems try again!!","error");
      }
    )
  }



}
