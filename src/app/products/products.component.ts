import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Products } from '../Models/Products';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  products: Products[] = [];
  filteredProducts: Products[] = [];
  category:string;
  cart:any;
  subscription:Subscription;

  constructor(product: ProductService,route: ActivatedRoute,private shopingCart:ShoppingCartService) {

    product.getProdcuts().subscribe(p => {
      this.products = p;
      route.queryParamMap.subscribe(pa => {
        this.category = pa.get('category');

        this.filteredProducts = (this.category) ?
          this.products.filter(a => a.category === this.category) :
          this.products;
      });

    });
  }

  async ngOnInit()
  {
     this.subscription =(await this.shopingCart.getCart())
     .subscribe(cart=>{this.cart=cart });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
