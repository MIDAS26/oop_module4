import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab23Part2Component } from './lab23-part2.component';

describe('Lab23Part2Component', () => {
  let component: Lab23Part2Component;
  let fixture: ComponentFixture<Lab23Part2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab23Part2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab23Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
