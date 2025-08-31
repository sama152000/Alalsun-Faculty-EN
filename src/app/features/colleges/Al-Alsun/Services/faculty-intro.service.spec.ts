/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacultyIntroService } from './faculty-intro.service';

describe('Service: FacultyIntro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyIntroService]
    });
  });

  it('should ...', inject([FacultyIntroService], (service: FacultyIntroService) => {
    expect(service).toBeTruthy();
  }));
});
