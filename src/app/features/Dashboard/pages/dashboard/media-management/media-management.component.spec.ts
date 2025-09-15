/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaManagementComponent } from './media-management.component';

describe('MediaManagementComponent', () => {
  let component: MediaManagementComponent;
  let fixture: ComponentFixture<MediaManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
