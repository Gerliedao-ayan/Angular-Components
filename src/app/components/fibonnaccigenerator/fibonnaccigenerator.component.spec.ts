import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonnaccigeneratorComponent } from './fibonnaccigenerator.component';

describe('FibonnaccigeneratorComponent', () => {
  let component: FibonnaccigeneratorComponent;
  let fixture: ComponentFixture<FibonnaccigeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FibonnaccigeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibonnaccigeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
