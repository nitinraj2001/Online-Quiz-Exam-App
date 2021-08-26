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

   

  constructor(public loginservice:LoginService,private router:Router,private snakebar:MatSnackBar) { }


  ngOnInit(): void {
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['login']);
    this.snakebar.open("you have successfully logged out","ok");
  }



}
