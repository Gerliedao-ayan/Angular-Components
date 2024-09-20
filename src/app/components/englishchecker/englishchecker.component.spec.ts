import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishcheckerComponent } from './englishchecker.component';

describe('EnglishcheckerComponent', () => {
  let component: EnglishcheckerComponent;
  let fixture: ComponentFixture<EnglishcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
