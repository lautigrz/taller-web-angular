import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVistaRapida } from './modal-vista-rapida';

describe('ModalVistaRapida', () => {
  let component: ModalVistaRapida;
  let fixture: ComponentFixture<ModalVistaRapida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVistaRapida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVistaRapida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
