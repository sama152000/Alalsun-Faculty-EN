/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditViceDeanComponent } from './edit-vice-dean.component';

describe('EditViceDeanComponent', () => {
  let component: EditViceDeanComponent;
  let fixture: ComponentFixture<EditViceDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditViceDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViceDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
