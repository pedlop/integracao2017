import { CarregandoModule } from './carregando.module';

describe('CarregandoModule', () => {
  let carregandoModule: CarregandoModule;

  beforeEach(() => {
    carregandoModule = new CarregandoModule();
  });

  it('should create an instance', () => {
    expect(carregandoModule).toBeTruthy();
  });
});
