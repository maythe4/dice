import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicesControlComponent } from './dices-control.component';

describe('DicesControlComponent', () => {
  let component: DicesControlComponent;
  let fixture: ComponentFixture<DicesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
