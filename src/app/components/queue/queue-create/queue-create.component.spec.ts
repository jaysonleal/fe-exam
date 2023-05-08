import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueCreateComponent } from './queue-create.component';

describe('QueueCreateComponent', () => {
  let component: QueueCreateComponent;
  let fixture: ComponentFixture<QueueCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
