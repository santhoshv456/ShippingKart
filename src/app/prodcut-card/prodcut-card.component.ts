import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../Models/Products';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-prodcut-card',
  templateUrl: './prodcut-card.component.html',
  styleUrls: ['./prodcut-card.component.css']
})
export class ProdcutCardComponent implements OnInit {

  @Input('p') p:Products;  
  @Input('showActions') showActions;
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

  getQuantity()
  {

     if(!this.shoppingcart) return 0;

     let item=this.shoppingcart.itemsMap[this.p.$key];
     return item? item.quantity:0;
  }

  ngOnInit() {
  }

}
