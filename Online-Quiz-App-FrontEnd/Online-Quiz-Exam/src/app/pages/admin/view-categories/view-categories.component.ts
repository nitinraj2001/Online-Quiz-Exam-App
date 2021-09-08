import Swal from 'sweetalert2';
import { CategoryService } from './../../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any=[{
    "cid":1,"title":"","description":""
  }]

  constructor(private categoryService:CategoryService,private snakebar:MatSnackBar,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data)=>{
       // console.log("category data from server is "+data);
        this.categories=data;
      },
      (error)=>{console.log(error),
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
      }
    )
  }

  deleteCategory(cid:number){
   // console.log("category to be deleted with cid: "+cid);
    this.categoryService.deleteCategory(cid).subscribe((data)=>{
     // console.log(data);
      Swal.fire("success!!","category is successfully deleted","success");
      this.router.navigate(['/admin/categories']);
    },
    (error)=>{
     // console.log(error);
      Swal.fire("err!!","category can't be deleted try again!!","error");
    })
    
  }

}
