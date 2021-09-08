import { QuizService } from './../../../service/quiz.service';
import { CategoryService } from './../../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  category:any=[
    {
      "cid":0,"title":"","description":""
    }
  ]

  quizId:any;

  quiz:any={
    "qid":0,"title":'',"description":'',"numberOfQuestions":'',"maxMarks":"","active":false,"category":{"cid":0}
  }


  constructor(private categoryService:CategoryService,private quizService:QuizService,private snakebar:MatSnackBar,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data)=>{
       // console.log("categories from server is: "+data);
        this.category=data;
      },
      (error)=>{console.log(error);
        this.snakebar.open("unable to load category due to some server error try again!!","ok",{duration:3000});
      }
    )
     this.quizId=+this.route.snapshot.paramMap.get("qid");
     this.quizService.getQuiz(this.quizId).subscribe(
       (data)=>{
         this.quiz=data;
       },
       (error)=>{console.log(error);
        this.snakebar.open("quiz can't be updated due to some error");
        this.router.navigate(['/admin/view-quizzes']);
       }
     )
  }

  updateQuiz(){

   // console.log("quiz data send from front-end is: "+this.quiz);
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
    this.quizService.updatetheQuiz(this.quiz).subscribe(
      (data)=>{
       // console.log(JSON.stringify(data));
        Swal.fire("success!!","quiz is successfully updated","success");
        this.router.navigate(['/admin/view-quizzes']);
      },
      (error)=>{
       // console.log(error);
        Swal.fire("err!!","quiz can't be updated due to some problem or invalid data try again!!","error");
      }
    )
  }
    
  }


