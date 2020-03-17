import { shoppingCartItem } from './shopping-cart-item';
import { Products } from './Products';

export  class shoppingCart{
   
   items:shoppingCartItem[]=[]; 

    constructor(public itemsMap:{[productId:string]:shoppingCartItem})
    { 
        this.itemsMap= itemsMap || {};
        
          for(let productId in itemsMap)
          { 
             let item=itemsMap[productId];
             let x=new shoppingCartItem();
             Object.assign(x,item);
             x.$key=productId;
             this.items.push(x);
          }
         
    }

  getQuantity(p:Products)
  { 
     let item=this.itemsMap[p.$key];
     return item? item.quantity:0;
  }
    
   get totalPrice()
   {
      let sum=0;
       
      for(let prodId in this.items)
      {
         sum += this.items[prodId].totalPrice;
      }
     
      return sum;
   }

    get TotalItemCount()
    {
       let count=0;
       
       for(let productId in this.itemsMap)
       { 
          count += this.itemsMap[productId].quantity;
       }

       return count;
    }

}