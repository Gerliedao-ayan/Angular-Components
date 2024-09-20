import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgegeneratorComponent } from './agegenerator.component';

describe('AgegeneratorComponent', () => {
  let component: AgegeneratorComponent;
  let fixture: ComponentFixture<AgegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgegeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
