/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlsunJournalComponent } from './alsun-journal.component';

describe('AlsunJournalComponent', () => {
  let component: AlsunJournalComponent;
  let fixture: ComponentFixture<AlsunJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsunJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsunJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
