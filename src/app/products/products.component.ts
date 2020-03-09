import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Products } from '../Models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Products[] = [];
  filteredProducts: Products[] = [];
  category:string;

  constructor(product: ProductService,route: ActivatedRoute) {

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
}
