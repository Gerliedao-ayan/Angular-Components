import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountercomponentComponent } from './countercomponent.component';

describe('CountercomponentComponent', () => {
  let component: CountercomponentComponent;
  let fixture: ComponentFixture<CountercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountercomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
