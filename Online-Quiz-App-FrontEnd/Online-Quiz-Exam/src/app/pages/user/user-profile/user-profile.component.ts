import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  user=null;

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.user=this.loginservice.getUserDetails();
  }

}
