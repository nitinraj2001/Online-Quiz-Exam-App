import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWelcomePageComponent } from './user-welcome-page.component';

describe('UserWelcomePageComponent', () => {
  let component: UserWelcomePageComponent;
  let fixture: ComponentFixture<UserWelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWelcomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
