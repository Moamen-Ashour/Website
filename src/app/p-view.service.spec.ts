import { TestBed, inject } from '@angular/core/testing';

import { PViewService } from './p-view.service';

describe('PViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PViewService]
    });
  });

  it('should be created', inject([PViewService], (service: PViewService) => {
    expect(service).toBeTruthy();
  }));
});
