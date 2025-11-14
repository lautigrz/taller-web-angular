import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarianteProduct } from './variante-product';

describe('VarianteProduct', () => {
  let component: VarianteProduct;
  let fixture: ComponentFixture<VarianteProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarianteProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarianteProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
