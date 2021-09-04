import { LoginService } from './../../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  jwtTokenStatus:any=false;

  constructor(private loginService:LoginService,private router:Router,private snakebar:MatSnackBar) { }

  ngOnInit(): void {
   
  }

}
