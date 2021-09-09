import { LoginService } from 'src/app/service/login.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { LocationStrategy } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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
  attempted:any;
  marksObtained:any;
  correctAnswers:any;
  questions:any=[{
    quesId:'',answer:'',content:'',givenAnswer:'',option1:'',option2:'',option3:'',option4:'',quiz:{quizId:''},
  },]
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  isSubmit=false;
  result:any;

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

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    Swal.fire("warning","You can't right click if u will do so your exam will be cancalled!!","warning");
  event.preventDefault();
}

  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
     
      showCancelButton: true,
      confirmButtonText: `Submit`,
     
    }).then((result)=>{
      this.isSubmit=true;
       this.evaluateQuiz();
    })
  }
  evaluateQuiz() {
    console.log(this.questions);
    this.questionService.evaluateQuiz(this.questions).subscribe((data)=>{
      console.log(data);
      Swal.fire("Success","Quiz is successfully submitted you can now download your result with response!!","success");
      this.result=data;
      this.marksObtained=this.result.marksObtained;
      this.correctAnswers=this.result.correctAnswers;
      this.attempted=this.result.attempted;

    },
    (error)=>{
      Swal.fire("error","Quiz can't be evaluated try again to submit","error");
    })
  }

}
