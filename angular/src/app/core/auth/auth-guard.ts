import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

    constructor(protected override readonly router: Router, protected readonly keycloak: KeycloakService) {
        super(router, keycloak);
    }

    override async isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean | UrlTree> {
            // if(!this.authenticated) {
            //     await this.keycloak.login({
            //         redirectUri: window.location.origin + state.url
            //     })
            // }

            // const requiredRoles = route.data['roles'];

            // if(requiredRoles.length === 0 || !(requiredRoles instanceof Array)) {
            //     return true;
            // }
            
            // return requiredRoles.every((role) => this.roles.includes(role));
            if(this.keycloak.isTokenExpired()) {
                this.router.navigate(['login']);
                return false;
            }
            return true;
        }
}