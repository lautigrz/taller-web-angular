import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBarra } from './steps-barra';

describe('StepsBarra', () => {
  let component: StepsBarra;
  let fixture: ComponentFixture<StepsBarra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsBarra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsBarra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
