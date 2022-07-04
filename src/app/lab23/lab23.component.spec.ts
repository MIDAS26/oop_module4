import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab23Component } from './lab23.component';

describe('Lab23Component', () => {
  let component: Lab23Component;
  let fixture: ComponentFixture<Lab23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
