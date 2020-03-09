import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { take } from '../../../node_modules/rxjs/operators';
import { Products } from '../Models/Products';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product;
  id;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private category:CategoryService,
    private Product:ProductService) {
    this.categories$=category.getcategories();
    this.id=this.route.snapshot.paramMap.get('id');
    this.product =Product.get(this.id).pipe(take(1)).subscribe(x=>this.product=x);
   }

   save(product)
   {
       if(this.id) 
       this.Product.update(this.id,product);
       else 
       this.Product.create(product);

       this.router.navigate(['/admin/prodcuts']);
   }

   delete()
   {
     if(!confirm('Are You Sure?')) return;

     this.Product.delete(this.id);
     this.router.navigate(['/admin/prodcuts']);
   }

   ngOnInit()
   {

   }

}
