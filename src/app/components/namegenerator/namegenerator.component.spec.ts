import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamegeneratorComponent } from './namegenerator.component';

describe('NamegeneratorComponent', () => {
  let component: NamegeneratorComponent;
  let fixture: ComponentFixture<NamegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamegeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
