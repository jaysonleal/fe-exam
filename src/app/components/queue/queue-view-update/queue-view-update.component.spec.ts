import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueViewUpdateComponent } from './queue-view-update.component';

describe('QueueViewUpdateComponent', () => {
  let component: QueueViewUpdateComponent;
  let fixture: ComponentFixture<QueueViewUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueViewUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueViewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
