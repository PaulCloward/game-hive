import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTabPage } from './discover-tab.page';

describe('DiscoverTabPage', () => {
  let component: DiscoverTabPage;
  let fixture: ComponentFixture<DiscoverTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
