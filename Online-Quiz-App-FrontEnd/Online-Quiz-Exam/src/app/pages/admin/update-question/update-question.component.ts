import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  quizId:any;
  quizTitle:any;
  question:any={
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
    this.questionService.getQuestion(this.quizId).subscribe(
      (data)=>{
       // console.log(data);
        this.question=data;
      },
      (error)=>{
        //console.log(error);
        Swal.fire("err!!","can't load question data try again!!","error");
      }
    )
  }




  updateQuestion(){

  }

}
