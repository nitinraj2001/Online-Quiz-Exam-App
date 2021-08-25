import { UserService } from './../../service/user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User:User={username:'',firstname:'',lastname:'',email:'',phonenumber:'',password:''};

  constructor(private UserService:UserService,private snakebar:MatSnackBar) { }


  ngOnInit(): void {
    
  }

  FormSubmit(){
    if(this.User.username==''||this.User.username==null||this.User.email==null||this.User.firstname==null||this.User.lastname==null||this.User.phonenumber==null){
      this.snakebar.open("username is required!!",'ok',{duration:3000});
    }
    console.log(this.User);
    this.UserService.registerUser(this.User).subscribe((data)=>{console.log(data),Swal.fire("user is successfully registered")},(error)=>this.snakebar.open("something went wrong!! please try again...",'ok',{duration:30000}));

  }

}