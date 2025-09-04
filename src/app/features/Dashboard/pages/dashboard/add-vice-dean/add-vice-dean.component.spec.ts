/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddViceDeanComponent } from './add-vice-dean.component';

describe('AddViceDeanComponent', () => {
  let component: AddViceDeanComponent;
  let fixture: ComponentFixture<AddViceDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddViceDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViceDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
