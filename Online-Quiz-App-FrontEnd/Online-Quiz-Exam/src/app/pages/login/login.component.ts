import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData:any={username:'',password:''};

  constructor(private snakebar:MatSnackBar,private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userData.username==null||this.userData.username==''){
      this.snakebar.open("invalid user name please try with valid user","",{duration:3000});
    }
    if(this.userData.password==null||this.userData.password==''){
      this.snakebar.open("invalid user password please try with valid password","",{duration:3000});
    }
    console.log("user data is "+this.userData.username,+this.userData.password);
    this.generateToken();
  }

  generateToken(){
     this.loginservice.generatejwtToken(this.userData).subscribe((data)=>{console.log(data),Swal.fire("user is successfully login")},(error)=>this.snakebar.open(error,'',{duration:3000}));
  }

}
