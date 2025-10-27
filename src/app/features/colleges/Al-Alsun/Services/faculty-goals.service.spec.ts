/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacultyGoalsService } from './faculty-goals.service';

describe('Service: FacultyGoals', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyGoalsService]
    });
  });

  it('should ...', inject([FacultyGoalsService], (service: FacultyGoalsService) => {
    expect(service).toBeTruthy();
  }));
});
