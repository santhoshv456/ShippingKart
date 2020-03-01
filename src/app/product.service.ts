import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product)
  {
     return this.db.list('/products').push(product);
  }

  getProdcuts()
  {
    return this.db.list('/products');
  }

  get(prodcut)
  {
    return this.db.object('/products/'+prodcut);
  }

  update(productId,product)
  {
     return this.db.object('/products/'+productId).update(product);
  }

  delete(productId)
  {
     return this.db.object('/products/'+productId).remove();
  }

}
