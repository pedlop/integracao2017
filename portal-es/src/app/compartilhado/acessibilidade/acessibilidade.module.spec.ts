import { AcessibilidadeModule } from './acessibilidade.module';

describe('AcessibilidadeModule', () => {
  let acessibilidadeModule: AcessibilidadeModule;

  beforeEach(() => {
    acessibilidadeModule = new AcessibilidadeModule();
  });

  it('should create an instance', () => {
    expect(acessibilidadeModule).toBeTruthy();
  });
});
