import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab21Part3Component } from './lab21-part3.component';

describe('Lab21Part3Component', () => {
  let component: Lab21Part3Component;
  let fixture: ComponentFixture<Lab21Part3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab21Part3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab21Part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
