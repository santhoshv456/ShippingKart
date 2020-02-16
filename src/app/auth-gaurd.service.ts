import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  
  canActivate(route,state:RouterStateSnapshot) {
    return this.auth.user$.pipe(map(user => {
      if (user) return true; 

      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
      return false;
    }));
}
}
