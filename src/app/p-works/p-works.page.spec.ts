import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PWorksPage } from './p-works.page';

describe('PWorksPage', () => {
  let component: PWorksPage;
  let fixture: ComponentFixture<PWorksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PWorksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
