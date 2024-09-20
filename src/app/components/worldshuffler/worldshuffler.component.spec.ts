import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldshufflerComponent } from './worldshuffler.component';

describe('WorldshufflerComponent', () => {
  let component: WorldshufflerComponent;
  let fixture: ComponentFixture<WorldshufflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldshufflerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldshufflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
