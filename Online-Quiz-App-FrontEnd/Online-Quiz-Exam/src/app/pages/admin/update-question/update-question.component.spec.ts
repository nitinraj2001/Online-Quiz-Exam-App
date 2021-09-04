import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionComponent } from './update-question.component';

describe('UpdateQuestionComponent', () => {
  let component: UpdateQuestionComponent;
  let fixture: ComponentFixture<UpdateQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
