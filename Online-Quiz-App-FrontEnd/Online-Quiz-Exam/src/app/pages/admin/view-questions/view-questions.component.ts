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
   quizTitle=null;

  questions:any=[{
    quesId:'',answer:'',content:'',option1:'',option2:'',option3:'',option4:'',quiz:{quizId:''},
  },]

  constructor(private router:Router,private route:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.quizId=this.route.snapshot.paramMap.get("qid");
    this.title=this.route.snapshot.paramMap.get("title");
    this.quizTitle=this.title;
    this.title=this.title.split('-').join(" ");
    //console.log("title of the quiz is "+this.title+" quiz id is "+this.quizId);
    this.getQuizQuestions();
  }

  getQuizQuestions(){
    this.questionService.getAllQuestions(this.quizId).subscribe(
      (data)=>{
        this.questions=data;
        //console.log(data);
      },
      (error)=>{
       // console.log(error);
        Swal.fire("error!!","questions can't be loaded due to some problems try again!!","error");
      }
    )
  }

  deleteQuestion(quesId:any){
    //console.log("question with quesId: "+quesId+"is to be deleted");
    Swal.fire({
      icon:'info',title:'Are you sure you want to delete this question?',confirmButtonText:'Delete',showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
       this.questionService.deleteQuestion(quesId).subscribe(
         (data)=>{
           this.questions=this.questions.filter((question)=>question.quesId!=quesId);
          // console.log(data);
           Swal.fire("success!!","question is successfully deleted","success");
         },
         (error)=>{
           //console.log(error);
           Swal.fire("err!!","question can't be deleted try again!!","error");
         }
       )
      }
    }
    )
   

  }

  sendQuestionIdwithTitle(quesId:any){
    this.router.navigate(['/admin/update-question',quesId,this.quizTitle]);
  }



}
