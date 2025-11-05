import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enable } from './enable';

describe('Enable', () => {
  let component: Enable;
  let fixture: ComponentFixture<Enable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
