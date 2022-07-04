import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab22Part3Component } from './lab22-part3.component';

describe('Lab22Part3Component', () => {
  let component: Lab22Part3Component;
  let fixture: ComponentFixture<Lab22Part3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab22Part3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab22Part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
