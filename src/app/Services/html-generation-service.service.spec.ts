import { TestBed } from '@angular/core/testing';

import { HtmlGenerationServiceService } from './html-generation-service.service';

describe('HtmlGenerationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlGenerationServiceService = TestBed.get(HtmlGenerationServiceService);
    expect(service).toBeTruthy();
  });
});
