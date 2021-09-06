import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(private locationStrategy:LocationStrategy) { }

  ngOnInit(): void {
    this.preventbackbutton();
  }

  public preventbackbutton(){
    history.pushState(null,null,location.href);
    this.locationStrategy.onPopState(()=>{
      history.pushState(null,null,location.href);
      Swal.fire("error","you can't navigate back","error");
    })
  }

}
