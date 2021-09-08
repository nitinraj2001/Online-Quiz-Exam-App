import { LoginService } from 'src/app/service/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  jwtTokenStatus: any;

  mySub: Subscription;

  constructor(private loginService:LoginService,private router:Router,private snakebar:MatSnackBar) { }

  ngOnInit(): void {
    this.mySub = interval(1000*60*10).subscribe((func => {
      this.checkJwtTokenStatus();
    }))
    
  }

  checkJwtTokenStatus(){
     let token=this.loginService.getToken();
     this.loginService.generatejwtTokenStatus(token).subscribe(
      (data)=>{
        this.jwtTokenStatus=data;
        console.log("jwt token status is : "+this.jwtTokenStatus)
        if(this.jwtTokenStatus){
          this.loginService.logout();
        }
      })
     
  }

}






  
  

  