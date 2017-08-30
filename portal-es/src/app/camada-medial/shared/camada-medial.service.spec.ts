import { TestBed, inject } from '@angular/core/testing';

import { CamadaMedialService } from './camada-medial.service';

describe('CamadaMedialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamadaMedialService]
    });
  });

  it('should be created', inject([CamadaMedialService], (service: CamadaMedialService) => {
    expect(service).toBeTruthy();
  }));
});
