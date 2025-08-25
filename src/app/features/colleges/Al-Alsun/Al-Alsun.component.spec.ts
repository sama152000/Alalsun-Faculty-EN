/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlAlsunComponent } from './Al-Alsun.component';

describe('AlAlsunComponent', () => {
  let component: AlAlsunComponent;
  let fixture: ComponentFixture<AlAlsunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlAlsunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlAlsunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
