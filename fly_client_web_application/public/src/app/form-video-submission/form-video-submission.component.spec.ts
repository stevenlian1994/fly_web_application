import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideoSubmissionComponent } from './form-video-submission.component';

describe('FormVideoSubmissionComponent', () => {
  let component: FormVideoSubmissionComponent;
  let fixture: ComponentFixture<FormVideoSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVideoSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVideoSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
