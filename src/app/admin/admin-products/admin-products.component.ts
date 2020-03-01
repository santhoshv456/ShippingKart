import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {

  products:{title:string}[];
  filteredProdcuts:any[];
  subcription:Subscription;
  
  constructor(private product:ProductService) {
     this.subcription=product.getProdcuts().subscribe(x=>this.filteredProdcuts=this.products=x);
   }

     
   filter(query:string)
   {
      return this.filteredProdcuts=(query)? this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):this.products;
   }

   ngOnDestroy()
   {
      this.subcription.unsubscribe();
   }


  ngOnInit() {
  }

}
