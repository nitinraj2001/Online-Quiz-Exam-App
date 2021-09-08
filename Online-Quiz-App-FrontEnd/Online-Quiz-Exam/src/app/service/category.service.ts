import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getAllCategories(){
    return this.http.get(`${baseUrl}/category/getAllCategory`);
  }

  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/add-category`,category);
  }

  public deleteCategory(cid:number){
   // console.log(cid);
    return this.http.delete(`${baseUrl}/category/${cid}`);
  }

  public getCategory(cid:number){
    return this.http.get(`${baseUrl}/category/${cid}`);
  }

  public updateCategory(category:any){
    return this.http.put(`${baseUrl}/category/updateCategory`,category);
  }
}
