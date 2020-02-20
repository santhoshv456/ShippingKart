import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

constructor(private auth:AuthService,private router: Router,private user:UserService) { }

  canActivate() {
    return this.auth.appUser$.pipe(map(y=>y.isAdmin));
  }
}
