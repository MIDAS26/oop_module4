import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab22Component } from './lab22.component';

describe('Lab22Component', () => {
  let component: Lab22Component;
  let fixture: ComponentFixture<Lab22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
