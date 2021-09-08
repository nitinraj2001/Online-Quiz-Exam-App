import { LoginService } from 'src/app/service/login.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qid:any;
  user:any;
  questions:any=[{
    quesId:'',answer:'',content:'',option1:'',option2:'',option3:'',option4:'',quiz:{quizId:''},
  },]
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(private locationStrategy:LocationStrategy,private questionService:QuestionService,private router:ActivatedRoute,private loginService:LoginService) { }

  ngOnInit(): void {
    this.preventbackbutton();
    this.qid=+this.router.snapshot.paramMap.get("qid");
    this.questionService.getQuestionsOfQuiz(this.qid).subscribe(
      (data)=>{
        this.questions=data;
      },
      (error)=>{
        //console.log(error);
        Swal.fire("error","quiz questions can't be loaded try again!!","error");
      }
    )
    this.user=this.loginService.getUserDetails();
  }

  public preventbackbutton(){
    history.pushState(null,null,location.href);
    this.locationStrategy.onPopState(()=>{
      history.pushState(null,null,location.href);
      Swal.fire("error","you can't navigate back","error");
    })
  }

}
