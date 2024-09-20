import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsegreetingComponent } from './usegreeting.component';

describe('UsegreetingComponent', () => {
  let component: UsegreetingComponent;
  let fixture: ComponentFixture<UsegreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsegreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsegreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
