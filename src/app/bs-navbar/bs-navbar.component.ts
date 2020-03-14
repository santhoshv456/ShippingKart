import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { AppUser } from '../Models/AppUser';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  quantity:number;

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
   let cart$ =await this.cartservice.getCart();
   
   cart$.subscribe(cart=>{
       this.quantity=0;
       
       for(let productId in cart.items)
       { 
          this.quantity += cart.items[productId].quantity;
       }
   });

}


   
}
