import { ProfileComponent } from './pages/profile/profile.component';
import { UserGuard } from './service/user.guard';
import { AdminGuard } from './service/admin.guard';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'admin',component:AdmindashboardComponent,canActivate:[AdminGuard],
   children:[
    {
      path:'',component:WelcomeComponent,
        }, 
        {
          path:'home',component:WelcomeComponent,
            }, 
    {
     path:'profile',component:ProfileComponent,
       },
       {
        path:'categories',component:ViewCategoriesComponent,
          },
          {
            path:'add-category',component:AddCategoryComponent,
              }]},
  {path:'user',component:UserdashboardComponent,pathMatch:'full',canActivate:[UserGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
