import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/RX';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authservice: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        return this.authservice.isAuthenticated();
    }
}