import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { ViewAllQuizzesComponent } from './pages/user/view-all-quizzes/view-all-quizzes.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserWelcomePageComponent } from './pages/user/user-welcome-page/user-welcome-page.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
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
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';


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
              },
              {
                path:'updateCategory/:cid',component:UpdateCategoryComponent,
                  },
                  {
                    path:'view-quizzes',component:ViewQuizzesComponent,
                      },
                      {
                        path:'add-quiz',component:AddQuizComponent,
                          },
                          {
                            path:'updateQuiz/:qid',component:UpdateQuizComponent,
                              },
                              {
                                path:'view-questions/:qid/:title',component:ViewQuestionsComponent,
                                  },
                                  {
                                    path:'add-question/:qid/:title',component:AddQuestionComponent,
                                      },
                                      {
                                        path:'update-question/:qid/:title',component:UpdateQuestionComponent,
                                          },
                                         ]},
  {path:'user',component:UserdashboardComponent,canActivate:[UserGuard],
    children:[{
      path:'',component:UserWelcomePageComponent,
    }, 
    {
      path:'home',component:UserWelcomePageComponent,
        }, 
        {
          path:'profile',component:UserProfileComponent,
        }, 
        {
          path:'quizzes/:cid',component:ViewAllQuizzesComponent,
        }, 
        {
          path:'instructions/:qid',component:InstructionComponent,
            },
    ]    
},
{path:'start-quiz/:qid',component:StartQuizComponent,pathMatch:'full',canActivate:[UserGuard],},

  {path:'forgot-password',component:ForgotPasswordComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
