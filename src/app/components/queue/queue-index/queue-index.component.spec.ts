import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueIndexComponent } from './queue-index.component';

describe('QueueIndexComponent', () => {
  let component: QueueIndexComponent;
  let fixture: ComponentFixture<QueueIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
