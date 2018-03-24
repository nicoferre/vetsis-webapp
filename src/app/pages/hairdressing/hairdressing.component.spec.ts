import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairdressingComponent } from './hairdressing.component';

describe('HairdressingComponent', () => {
  let component: HairdressingComponent;
  let fixture: ComponentFixture<HairdressingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairdressingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairdressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
