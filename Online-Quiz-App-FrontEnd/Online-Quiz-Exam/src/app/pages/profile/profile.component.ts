import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user=null;

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.user=this.loginservice.getUserDetails();
  }

}
