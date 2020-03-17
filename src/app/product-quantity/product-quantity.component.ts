import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../Models/Products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  

  @Input('p') p:Products;  
  @Input('shoppingcart') shoppingcart;
  
  constructor(private cartService:ShoppingCartService) { }

  AddtoCart()
  {
     this.cartService.addTocart(this.p);      
  }

  removeFromCart()
  {
    this.cartService.removeFromCart(this.p);
  }

  



}
