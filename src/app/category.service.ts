import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
  
  getcategories()
  {
    return this.db.list('/categories',{
      query:{
        orderByChild:'name'
      }
    });
  }

}
