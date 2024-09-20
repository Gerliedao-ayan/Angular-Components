import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordrevserComponent } from './wordrevser.component';

describe('WordrevserComponent', () => {
  let component: WordrevserComponent;
  let fixture: ComponentFixture<WordrevserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordrevserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordrevserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
