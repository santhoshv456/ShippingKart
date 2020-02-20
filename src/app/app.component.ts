import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService,private router:Router,private user:UserService)
  {
     auth.user$.subscribe(x=>{
         if(x) 
         {
           user.save(x);
           router.navigateByUrl(localStorage.getItem('returnUrl'));
         }
     });
  }
}
