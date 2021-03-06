import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  
  @Input('category') category;

  category$;
  
  constructor(category:CategoryService) { 
    this.category$ = category.getcategories();
  }

  ngOnInit() {
  }

}
