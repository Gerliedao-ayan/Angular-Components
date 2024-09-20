import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveQuizComponent } from './interactive-quiz.component';

describe('InteractiveQuizComponent', () => {
  let component: InteractiveQuizComponent;
  let fixture: ComponentFixture<InteractiveQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
