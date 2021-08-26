import { UserGuard } from './service/user.guard';
import { AdminGuard } from './service/admin.guard';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'admin',component:AdmindashboardComponent,pathMatch:'full',canActivate:[AdminGuard]},
  {path:'user',component:UserdashboardComponent,pathMatch:'full',canActivate:[UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
