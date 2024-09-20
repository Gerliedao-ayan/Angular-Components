import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodtrakerComponent } from './moodtraker.component';

describe('MoodtrakerComponent', () => {
  let component: MoodtrakerComponent;
  let fixture: ComponentFixture<MoodtrakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodtrakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodtrakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
