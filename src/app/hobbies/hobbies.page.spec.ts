import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesPage } from './hobbies.page';

describe('HobbiesPage', () => {
  let component: HobbiesPage;
  let fixture: ComponentFixture<HobbiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
