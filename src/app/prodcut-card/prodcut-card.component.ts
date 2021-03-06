import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../Models/Products';
import { ShoppingCartService } from '../shopping-cart.service';
import { shoppingCart } from '../Models/shopping-cart';


@Component({
  selector: 'app-prodcut-card',
  templateUrl: './prodcut-card.component.html',
  styleUrls: ['./prodcut-card.component.css']
})
export class ProdcutCardComponent implements OnInit {

  @Input('p') p:Products;  
  @Input('showActions') showActions;
  @Input('shoppingcart') shoppingcart:shoppingCart;
  
  constructor(private cartService:ShoppingCartService) { }

  AddtoCart()
  {
     this.cartService.addTocart(this.p);      
  }

  ngOnInit() {
  }

}
