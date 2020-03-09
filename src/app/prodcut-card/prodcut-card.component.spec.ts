import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutCardComponent } from './prodcut-card.component';

describe('ProdcutCardComponent', () => {
  let component: ProdcutCardComponent;
  let fixture: ComponentFixture<ProdcutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
