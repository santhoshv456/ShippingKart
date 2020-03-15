import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { AppUser } from '../Models/AppUser';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { shoppingCart } from '../Models/shopping-cart';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  quantity:number;
  cart$:Observable<shoppingCart>;


  constructor(public auth:AuthService,private cartservice:ShoppingCartService) {  
    
   }

   appuser:AppUser;
   
   logout()
   {
     this.auth.logout();
   }
 
async ngOnInit()
{
   this.auth.appUser$.subscribe(x=>this.appuser=x);
   this.cart$ =await this.cartservice.getCart();

}


   
}
