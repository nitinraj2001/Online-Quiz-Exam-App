import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginservice:LoginService,private router:Router,private snakebar:MatSnackBar){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginservice.IsloggedIn()&&this.loginservice.getUserAuthority()=='ADMIN'){
        return true;
      }
      this.router.navigate(['login']);
      this.snakebar.open("please login first to reach out to admin functionalities",'ok');
    return false;
  }
  
}
