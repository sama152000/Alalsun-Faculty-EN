/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EducationalServiceService } from './educational-service.service';

describe('Service: EducationalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationalServiceService]
    });
  });

  it('should ...', inject([EducationalServiceService], (service: EducationalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
