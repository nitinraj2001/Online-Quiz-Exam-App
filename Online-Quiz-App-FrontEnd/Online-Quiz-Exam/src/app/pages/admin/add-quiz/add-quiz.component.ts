import { QuizService } from './../../../service/quiz.service';
import { CategoryService } from 'src/app/service/category.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  category:any=[
    {
      "cid":0,"title":"","description":""
    }
  ]

  quiz:any={
    qid:0,title:'',description:'',numberOfQuestions:'',maxMarks:"",active:false,category:{cid:'',},
  }


  constructor(private quizService:QuizService,private categoryService:CategoryService,private snakebar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data)=>{
        console.log("categories from server is: "+data);
        this.category=data;
      },
      (error)=>{console.log(error);
        this.snakebar.open("unable to load category due to some server error try again!!","ok",{duration:3000});
      }
    )
  }
  
  addQuiz(){
    console.log("quiz data send from front-end is: "+this.quiz);
    if(this.quiz.title==null||this.quiz.title==''){
        this.snakebar.open("Invalid data!! quiz title can't be empty or null");
        return;
    }
    if(this.quiz.description==null||this.quiz.description==''){
      this.snakebar.open("Invalid data!! quiz description can't be empty or null");
      return;
    }
    if(this.quiz.maxMarks==null||this.quiz.maxMarks==''){
       this.snakebar.open("Invalid data!! quiz maxMarks can't be empty or null");
       return;
    }
    if(this.quiz.category==null||this.quiz.category==''){
      this.snakebar.open("Invalid data!! quiz category can't be empty or null");
      return;
   }
    if(this.quiz.numberOfQuestions==null||this.quiz.numberOfQuestions==''){
       this.snakebar.open("Invalid data!! quiz must have limit on number of question");
       return;
    }
    this.quizService.addQuiz(this.quiz).subscribe(
      (data)=>{
        //console.log(JSON.stringify(data));
        Swal.fire("success!!","quiz is successfully added","success");
        this.router.navigate(['/admin/view-quizzes']);
      },
      (error)=>{
       // console.log(error);
        Swal.fire("err!!","quiz can't be added due to some problem or invalid data try again!!","error");
      }
    )
  }

}
