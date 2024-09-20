import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercasegreettingComponent } from './uppercasegreetting.component';

describe('UppercasegreettingComponent', () => {
  let component: UppercasegreettingComponent;
  let fixture: ComponentFixture<UppercasegreettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppercasegreettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercasegreettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
