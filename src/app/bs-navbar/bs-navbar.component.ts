import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { AppUser } from '../Models/AppUser';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  constructor(public auth:AuthService) {  
     this.auth.appUser$.subscribe(x=>this.appuser=x);
   }

   appuser:AppUser;
   
   logout()
   {
     this.auth.logout();
   }

}
