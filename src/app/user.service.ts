import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from '../../node_modules/angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from './Models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) {
   }


   save(user:firebase.User)
   {
      this.db.object('/users/'+user.uid).update({
         name:user.displayName,
         email:user.email
      });
   }

   get(uid:string):FirebaseObjectObservable<AppUser>
   {
       return this.db.object('/users/'+uid);
   }


}
