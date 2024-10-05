import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./AuthService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.authService.authenticated) {
            this.router.navigate(['login'])
            return false;
        }
        return true;
    }
    
}