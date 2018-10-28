import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVitaePage } from './c-vitae.page';

describe('CVitaePage', () => {
  let component: CVitaePage;
  let fixture: ComponentFixture<CVitaePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVitaePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVitaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
