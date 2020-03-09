import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prodcut-card',
  templateUrl: './prodcut-card.component.html',
  styleUrls: ['./prodcut-card.component.css']
})
export class ProdcutCardComponent implements OnInit {

  @Input('p') p;  
  @Input('showActions') showActions;
  
  constructor() { }

  ngOnInit() {
  }

}
