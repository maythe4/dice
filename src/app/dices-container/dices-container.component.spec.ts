import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicesContainerComponent } from './dices-container.component';

describe('DicesContainerComponent', () => {
  let component: DicesContainerComponent;
  let fixture: ComponentFixture<DicesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
