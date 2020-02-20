import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, observable } from 'rxjs';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { FirebaseObjectObservable } from '../../node_modules/angularfire2/database';
import { AppUser } from './Models/AppUser';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import {of } from 'rxjs';

@Injectable()
export class AuthService {
 
user$:Observable<firebase.User>;

  constructor(private afireAuth:AngularFireAuth, private route:ActivatedRoute,private router:Router,private user:UserService) { 
       this.user$=afireAuth.authState;
  }

login()
  {
     let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl',returnUrl);
     this.afireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

logout()
  {
    this.afireAuth.auth.signOut();
  }

  get appUser$():Observable<AppUser>
  {
    return this.user$.pipe(switchMap(x=>{
      if(x) return this.user.get(x.uid);

      return of(null);
  }));
  }
  
}
