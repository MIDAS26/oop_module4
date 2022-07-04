import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab23Part3Component } from './lab23-part3.component';

describe('Lab23Part3Component', () => {
  let component: Lab23Part3Component;
  let fixture: ComponentFixture<Lab23Part3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab23Part3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab23Part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
