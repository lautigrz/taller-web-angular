import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEmpty } from './message-empty';

describe('MessageEmpty', () => {
  let component: MessageEmpty;
  let fixture: ComponentFixture<MessageEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageEmpty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageEmpty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
