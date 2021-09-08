import { QuestionService } from './../../../service/question.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  quizId:any;
  quizTitle:any;
  question={
    content:'',option1:'',option2:'',option3:'',option4:'',answer:'',quiz:{qid:''},
  }
  public editorData = '<p>Add Content of question here</p>';

  public Editor=ClassicEditor;

  constructor(private Route:Router,private router:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.quizId=this.router.snapshot.paramMap.get("qid");
    this.quizTitle=this.router.snapshot.paramMap.get("title");
    this.quizTitle=this.quizTitle.split('-').join(" ");
    console.log("title of the quiz is "+this.quizTitle+" quiz id is "+this.quizId);
  }

  addQuestion(){
    console.log("data of question to be added is:"+this.question);
    this.question.quiz.qid=this.quizId;
    this.questionService.addQuestion(this.question).subscribe(
      (data)=>{
        //console.log(data);
        Swal.fire("success!!","question is successfully added","success");
        this.Route.navigate(['/admin/view-questions',this.quizId,this.quizTitle]);
      },
      (error)=>{
       // console.log(error);
        Swal.fire("err!!","question can't be added try again!!","error");
      }
    )

  }

}
