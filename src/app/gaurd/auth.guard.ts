import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const { routeConfig } = route; 
   
      // provides the path of the route.
      const { path } = routeConfig as Route; 
      if (path?.includes('sign-up')) {
        // if user is administrator and is trying to access admin routes, allow access.
     
          return true;
        }
        this.router.navigateByUrl('/'); 
   return false;
  }
  constructor(private router: Router) { }
  
}
