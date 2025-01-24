import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from './users.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router:Router, private userService: UsersService ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
        if (!this.userService.hasTokenAdmin()) {
            alert('Por favor registrate para acceder admin');
            this.router.navigate(["/"]);
            return false;
        }
        return true;
    }
}
