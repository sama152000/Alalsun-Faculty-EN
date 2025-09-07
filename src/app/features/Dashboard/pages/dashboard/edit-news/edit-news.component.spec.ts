/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditNewsComponent } from './edit-news.component';

describe('EditNewsComponent', () => {
  let component: EditNewsComponent;
  let fixture: ComponentFixture<EditNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
