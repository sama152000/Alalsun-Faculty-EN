/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentGuideService } from './student-guide.service';

describe('Service: StudentGuide', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentGuideService]
    });
  });

  it('should ...', inject([StudentGuideService], (service: StudentGuideService) => {
    expect(service).toBeTruthy();
  }));
});
