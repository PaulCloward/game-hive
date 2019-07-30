import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveTabPage } from './hive-tab.page';

describe('HiveTabPage', () => {
  let component: HiveTabPage;
  let fixture: ComponentFixture<HiveTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
