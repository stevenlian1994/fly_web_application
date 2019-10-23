import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImageSubmissionComponent } from './form-image-submission.component';

describe('FormImageSubmissionComponent', () => {
  let component: FormImageSubmissionComponent;
  let fixture: ComponentFixture<FormImageSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormImageSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImageSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
