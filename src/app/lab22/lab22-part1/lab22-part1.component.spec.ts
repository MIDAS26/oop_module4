import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab22Part1Component } from './lab22-part1.component';

describe('Lab22Part1Component', () => {
  let component: Lab22Part1Component;
  let fixture: ComponentFixture<Lab22Part1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab22Part1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab22Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
