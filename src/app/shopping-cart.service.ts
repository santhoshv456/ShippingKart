import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from '../../node_modules/angularfire2/database';
import { Products } from './Models/Products';
import { take } from '../../node_modules/rxjs/operators';
import { promise } from '../../node_modules/protractor';
import { shoppingCart } from './Models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }


  async getCart():Promise<FirebaseObjectObservable<shoppingCart>> {
    let cartId=await this.getOrCreateId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getCartItem(cartId:string,productId:string)
  {
    return this.db.object('/shopping-carts/'+cartId+'/items/'+productId);   
  }

  private async getOrCreateId():Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addTocart(product: Products) {
    this.updateQuantity(product,1);
  }

  async removeFromCart(product: Products) {
    this.updateQuantity(product,-1);
  }

  private async updateQuantity(product: Products,change:number)
  {
    let cartId = await this.getOrCreateId();
    let item$=this.getCartItem(cartId,product.$key);
    item$.pipe(take(1)).subscribe(item=>{
      item$.update({ product:product,quantity:(item.quantity || 0)+ change});
    });
  }

}
