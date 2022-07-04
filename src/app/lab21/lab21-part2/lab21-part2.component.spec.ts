import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab21Part2Component } from './lab21-part2.component';

describe('Lab21Part2Component', () => {
  let component: Lab21Part2Component;
  let fixture: ComponentFixture<Lab21Part2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab21Part2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab21Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
