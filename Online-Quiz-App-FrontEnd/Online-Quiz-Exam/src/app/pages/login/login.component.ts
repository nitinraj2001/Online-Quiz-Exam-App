import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData:any={username:'',password:''};

  constructor(private snakebar:MatSnackBar,private loginservice:LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userData.username==null||this.userData.username==''){
      this.snakebar.open("invalid user name please try with valid user","",{duration:3000});
      return;
    }
    if(this.userData.password==null||this.userData.password==''){
      this.snakebar.open("invalid user password please try with valid password","",{duration:3000});
      return;
    }
    console.log("user data is "+this.userData.username,+this.userData.password);
    this.generateToken();
  }

  generateToken(){
     this.loginservice.generatejwtToken(this.userData).subscribe(
       (data)=>{
         console.log(data),
         //Swal.fire("user is successfully login"),
         this.loginservice.loginUser(JSON.parse(JSON.stringify(data)).token),
         this.loginservice.getCurrentUser().subscribe(
           (data)=>{
             this.loginservice.setUserDetails(data),
             console.log("currently login user is "+JSON.stringify(data))
             if(this.loginservice.getUserAuthority()=='ADMIN'){
                window.location.href='/admin';
             }
             else if(this.loginservice.getUserAuthority()=='USER'){
              window.location.href='/user';
              this.snakebar.open("user is successfully logged in");
             }
             else{
               this.loginservice.logout();
             }
           },
           (error)=>this.snakebar.open("no user is currently logged in",'',{duration:3000})
           )
        },
        (error)=>this.snakebar.open("invalid details!! please try again with valid credentials",'',{duration:3000}
        ));
  }

}
