import { Products } from './Products';

export class shoppingCartItem{
      
      $key:string;
      title:string;
      imageUrl:string;
      price:number;
      quantity:number;

      get totalPrice()
      {
            return this.price*this.quantity;
      }
}