import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;
  user:any=null;
   

  constructor(public loginservice:LoginService,private router:Router,private snakebar:MatSnackBar) { }


  ngOnInit(): void {
    if(this.isLoggedIn==false&&localStorage.getItem("user")!=null){
      this.logOut();
     this.snakebar.open("Access denied due to refresh of page please login! ","ok");
    }
    this.loginservice.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn=this.loginservice.IsloggedIn();
      this.user=this.loginservice.getUserDetails();
    })
  }


  logOut(){
    this.loginservice.logout();
    //window.location.href='/login';
    this.isLoggedIn=false;
    this.user=null;
    this.router.navigate(['login']);
    this.snakebar.open("you have successfully logged out","ok",{duration:2000});
  }



}
