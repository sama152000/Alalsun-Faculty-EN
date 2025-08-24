/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ViceDeanService } from './vice-dean.service.ts.service';

describe('Service: ViceDeanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViceDeanService]
    });
  });

  it('should ...', inject([ViceDeanService], (service: ViceDeanService) => {
    expect(service).toBeTruthy();
  }));
});
