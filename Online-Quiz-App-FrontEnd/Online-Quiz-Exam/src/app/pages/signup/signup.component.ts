import { UserService } from './../../service/user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User:User={username:'',firstname:'',lastname:'',email:'',phonenumber:'',password:''};

  constructor(private UserService:UserService) { }


  ngOnInit(): void {
    
  }

  FormSubmit(){
    console.log(this.User);
    this.UserService.registerUser(this.User).subscribe((data)=>console.log(data));
  }

}
