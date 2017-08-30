import { TestBed, inject } from '@angular/core/testing';

import { CamadaFinalService } from './camada-final.service';

describe('CamadaFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamadaFinalService]
    });
  });

  it('should be created', inject([CamadaFinalService], (service: CamadaFinalService) => {
    expect(service).toBeTruthy();
  }));
});
