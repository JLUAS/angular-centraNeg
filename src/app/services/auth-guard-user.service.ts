import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from './users.service';

@Injectable()
export class AuthGuardUserService implements CanActivate {

    constructor(private router:Router, private userService: UsersService ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
        if (!this.userService.hasTokenUser()) {
          alert('Por favor registrate para acceder user');
            this.router.navigate(["/"],{ queryParams: { retUrl: route.url} });
            return false;
        }
        return true;
    }
}
