import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab22Part2Component } from './lab22-part2.component';

describe('Lab22Part2Component', () => {
  let component: Lab22Part2Component;
  let fixture: ComponentFixture<Lab22Part2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab22Part2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab22Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
