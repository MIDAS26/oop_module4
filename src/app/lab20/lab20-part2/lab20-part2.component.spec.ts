import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab20Part2Component } from './lab20-part2.component';

describe('Lab20Part2Component', () => {
  let component: Lab20Part2Component;
  let fixture: ComponentFixture<Lab20Part2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab20Part2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab20Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
