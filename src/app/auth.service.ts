import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
 
user$:Observable<firebase.User>;

  constructor(private afireAuth:AngularFireAuth, private route:ActivatedRoute,private router:Router) { 
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


}
