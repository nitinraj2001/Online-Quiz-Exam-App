import { QuizService } from './../../../service/quiz.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-quizzes',
  templateUrl: './view-all-quizzes.component.html',
  styleUrls: ['./view-all-quizzes.component.css']
})
export class ViewAllQuizzesComponent implements OnInit {

  quizzes:any=[];
  categoryId:any;

  constructor(private quizService:QuizService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.categoryId=params.cid;
        if(this.categoryId==0){

          this.quizService.getAllActiveQuiz().subscribe(
            (data)=>{
           //   console.log("quizzes from database is:"+data);
              this.quizzes=data;
            },
            (error)=>{
             // console.log(error);
              Swal.fire("error","quizzes can't be loaded due to some problem try again!!!","error");
            }
          )
    
        }
        else{
          this.quizService.getAllActiveQuizOfCategory(this.categoryId).subscribe(
            (data)=>{
             // console.log("quizzes from database is:"+data);
              this.quizzes=data;
              //this.quizzes=this.quizzes.filter((quiz)=>quiz.category.cid==this.categoryId);
              if(this.quizzes.length==0){
                Swal.fire("error","There is no quiz with this category id!! Try with available quizzes!!","error");
                this.router.navigate(['/user/quizzes/0']);
              }
            },
            (error)=>{
              //console.log(error);
              Swal.fire("error","quizzes can't be loaded due to some problem try again!!!","error");
            }
          )
        }
      }
    )
    
   
  }

}
