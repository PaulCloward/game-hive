import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCriteriaPage } from './search-criteria.page';

describe('SearchCriteriaPage', () => {
  let component: SearchCriteriaPage;
  let fixture: ComponentFixture<SearchCriteriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCriteriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCriteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
