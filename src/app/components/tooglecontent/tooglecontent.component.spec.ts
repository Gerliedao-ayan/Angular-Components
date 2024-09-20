import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglecontentComponent } from './tooglecontent.component';

describe('TooglecontentComponent', () => {
  let component: TooglecontentComponent;
  let fixture: ComponentFixture<TooglecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooglecontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooglecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
