import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplybyComponent } from './multiplyby.component';

describe('MultiplybyComponent', () => {
  let component: MultiplybyComponent;
  let fixture: ComponentFixture<MultiplybyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplybyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplybyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
