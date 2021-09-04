import { LoginService } from './../../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  categories:any=[{
    "cid":1,"title":"","description":""
  }]

  constructor(private categoryService:CategoryService,private snakebar:MatSnackBar,private router:Router,private route:ActivatedRoute,private loginService:LoginService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data)=>{
       // console.log("category data from server is "+data);
        this.categories=data;
      },
      (error)=>{console.log(error),
      Swal.fire('error!!', 'category data cannot be loaded try again', 'error');
      }
    )
  }

  logout(){
    this.loginService.logout();
    //window.location.href='/login';
    this.router.navigate(['login']);
    this.snakebar.open("you have successfully logged out","ok",{duration:3000});
  }

}
