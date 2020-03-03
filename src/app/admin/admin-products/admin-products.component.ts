import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { Products } from '../../Models/Products';
import { DataTableResource } from '../../../../node_modules/angular5-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {

  products:Products[];
  subcription:Subscription;
  tableResource:DataTableResource<Products>;
  items:Products[]=[];
  itemCount:number;
  
  constructor(private product:ProductService) {
     this.subcription=product.getProdcuts().subscribe(x=>{
      this.products=x
      this.IntializeTable(this.products);
     });
   }


 private IntializeTable(products:Products[])
 {
  this.tableResource=new DataTableResource(products);
  this.tableResource.query({offset:0 })
  .then(items=>this.items=items);
  this.tableResource.count()
  .then(count=>this.itemCount=count);
 }


 realoadItems(params)
 {
   if(!this.tableResource) return;

  this.tableResource.query(params)
  .then(items=>this.items=items);
 }

     
   filter(query:string)
   {
      let filteredProdcuts=(query)? this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):this.products;
      this.IntializeTable(filteredProdcuts);
   }

   ngOnDestroy()
   {
      this.subcription.unsubscribe();
   }


  ngOnInit() {
  }

}
