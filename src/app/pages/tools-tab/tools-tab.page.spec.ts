import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTabPage } from './tools-tab.page';

describe('ToolsTabPage', () => {
  let component: ToolsTabPage;
  let fixture: ComponentFixture<ToolsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
