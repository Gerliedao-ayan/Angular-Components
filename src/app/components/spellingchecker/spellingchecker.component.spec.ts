import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellingcheckerComponent } from './spellingchecker.component';

describe('SpellingcheckerComponent', () => {
  let component: SpellingcheckerComponent;
  let fixture: ComponentFixture<SpellingcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellingcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellingcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
