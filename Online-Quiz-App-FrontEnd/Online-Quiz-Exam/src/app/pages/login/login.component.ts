import { User } from './../../user';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData:any={username:'',password:''};

  user:any;

  constructor(private snakebar:MatSnackBar,private loginservice:LoginService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    if(this.loginservice.IsloggedIn()){
      if(this.loginservice.getUserAuthority()=='ADMIN'){
      this.router.navigate(['admin']);
      }
      else if(this.loginservice.getUserAuthority()=='USER'){
       this.router.navigate(['user']);
      }
      else{
        this.loginservice.logout();
      }
    }
  }

  login(){
    if(this.userData.username==null||this.userData.username==''){
      this.snakebar.open("invalid user name please try with valid user","ok",{duration:3000});
      return;
    }
    if(this.userData.password==null||this.userData.password==''){
      this.snakebar.open("invalid user password please try with valid password","ok",{duration:3000});
      return;
    }
    //console.log("user data is "+this.userData.username,+this.userData.password);
    this.generateToken();
  }

  generateToken(){
     this.loginservice.generatejwtToken(this.userData).subscribe(
       (data)=>{
         //console.log(data),
         //Swal.fire("user is successfully login"),
         this.loginservice.loginUser(JSON.parse(JSON.stringify(data)).token),
         this.loginservice.getCurrentUser().subscribe(
           (data)=>{
             this.loginservice.setUserDetails(data);
             //console.log("currently login user is "+JSON.stringify(data))
             if(this.loginservice.getUserAuthority()=='ADMIN'){
                //window.location.href='/admin';
                this.router.navigate(['admin']);
                this.loginservice.loginStatusSubject.next(true);
                this.snakebar.open("admin is successfully logged in","ok");
             }
             else if(this.loginservice.getUserAuthority()=='USER'){
              //window.location.href='/user';
              this.router.navigate(['user']);
              this.loginservice.loginStatusSubject.next(true);
              this.snakebar.open("user is successfully logged in","ok");
             }
             else{
               this.loginservice.logout();
             }
           },
           (error)=>this.snakebar.open("no user is currently logged in",'ok',{duration:3000})
           )
        },
        (error)=>this.snakebar.open("invalid details!! please try again with valid credentials",'ok',{duration:3000}
        ));
  }
//going to implement Image processing functionality
}
