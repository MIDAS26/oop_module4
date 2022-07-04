import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab20Part1Component } from './lab20-part1.component';

describe('Lab20Part1Component', () => {
  let component: Lab20Part1Component;
  let fixture: ComponentFixture<Lab20Part1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab20Part1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab20Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
