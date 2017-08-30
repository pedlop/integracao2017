import { TestBed, inject } from '@angular/core/testing';

import { CamadaInicialService } from './camada-inicial.service';

describe('CamadaInicialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamadaInicialService]
    });
  });

  it('should be created', inject([CamadaInicialService], (service: CamadaInicialService) => {
    expect(service).toBeTruthy();
  }));
});
