import { shoppingCartItem } from './shopping-cart-item';

export  class shoppingCart{
   
   items:shoppingCartItem[]=[]; 

    constructor(public itemsMap:{[productId:string]:shoppingCartItem})
    {
          for(let productId in itemsMap)
          { 
             let item=itemsMap[productId];
             this.items.push(new shoppingCartItem(item.product,item.quantity));
          }
         
         
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