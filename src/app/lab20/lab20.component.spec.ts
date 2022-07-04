import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab20Component } from './lab20.component';

describe('Lab20Component', () => {
  let component: Lab20Component;
  let fixture: ComponentFixture<Lab20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
