import { LoginService } from './../../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private loginservice:LoginService,private snakebar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginservice.logout();
    //window.location.href='/login';
    this.router.navigate(['login']);
    this.snakebar.open("you have successfully logged out","ok");
  }

}
