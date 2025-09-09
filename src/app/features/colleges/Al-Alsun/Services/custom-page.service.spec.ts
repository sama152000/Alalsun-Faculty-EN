/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomPageService } from './custom-page.service';

describe('Service: CustomPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPageService]
    });
  });

  it('should ...', inject([CustomPageService], (service: CustomPageService) => {
    expect(service).toBeTruthy();
  }));
});
