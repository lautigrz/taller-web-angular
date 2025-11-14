import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenProduct } from './imagen-product';

describe('ImagenProduct', () => {
  let component: ImagenProduct;
  let fixture: ComponentFixture<ImagenProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
