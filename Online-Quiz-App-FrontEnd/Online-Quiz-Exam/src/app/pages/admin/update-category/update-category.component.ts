import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  category:any={
    "title":"","description":""
  }

  constructor(private categoryService:CategoryService,private snakebar:MatSnackBar,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    let cid=+this.route.snapshot.paramMap.get("cid");
   // console.log("category to be updated with cid is: "+cid);
    this.categoryService.getCategory(cid).subscribe(
      (data)=>{
       // console.log("data of category from server is: "+data);
        this.category=data;
      },
      (error)=>this.snakebar.open("category data can't be fetch invalid id or server problem!","ok",{duration:3000})
      )
  }

  updateCategory(){
    if(this.category.title==null||this.category.title.trim()==''){
      this.snakebar.open("title can't be empty","ok",{duration:3000});
      return;
   }
   if(this.category.description==null||this.category.description.trim()==''){
     this.snakebar.open("description can't be empty","ok",{duration:3000});
     return;
  }
     this.categoryService.updateCategory(this.category).subscribe(
       (data)=>{
        // console.log(data);
         Swal.fire("success!!","category is successfully updated","success");
         this.router.navigate(['admin/categories']);
       },
       (error)=>{
         //console.log(error);
         Swal.fire("err!!","category can't be updated due to some problem try again!!","error");
       }
     )
  }

  

}
