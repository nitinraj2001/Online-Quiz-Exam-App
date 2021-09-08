import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './../../../service/quiz.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  quizId:any;
  quiz:any={
    "qid":0,"title":'',"description":'',"numberOfQuestions":'',"maxMarks":"","active":false,"category":{"cid":0}
  }

  constructor(private quizService:QuizService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params)=>{
        this.quizId=params.qid;
        this.quizService.getQuiz(this.quizId).subscribe(
          (data)=>{
            //console.log(data);
            this.quiz=data;
          },
          (error)=>{
            //console.log(error);
            Swal.fire("error!!","Quiz instructions can't be loaded try again!!","error");
          }
        )
      }
    )
  }

  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
     
      showCancelButton: true,
      confirmButtonText: `Start`,
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.route.navigate(['/start-quiz',this.quizId]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
