/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeNewsService } from './home-news.service';

describe('Service: HomeNews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeNewsService]
    });
  });

  it('should ...', inject([HomeNewsService], (service: HomeNewsService) => {
    expect(service).toBeTruthy();
  }));
});
