import { CategoryService } from './../../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category:any={
    "title":"","description":""
  }

  constructor(private categoryService:CategoryService,private snakebar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    if(this.category.title==null||this.category.title.trim()==''){
       this.snakebar.open("title can't be empty","ok",{duration:3000});
       return;
    }
    if(this.category.description==null||this.category.description.trim()==''){
      this.snakebar.open("description can't be empty","ok",{duration:3000});
      return;
   }
    this.categoryService.addCategory(this.category).subscribe(
      (data)=>{
        //console.log("category data from backend-end is "+data);
        Swal.fire("success!!","category is successfully added","success");
        this.router.navigate(['admin/categories'])
      },
      (error)=>{
        //console.log(error);
        Swal.fire("err!!","category can't be added try again!!","error");
      }
    )
  }

}
