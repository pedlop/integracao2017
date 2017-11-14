import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPesquisaCamadaFinalComponent } from './menu-pesquisa-camada-final.component';

describe('MenuPesquisaCamadaFinalComponent', () => {
  let component: MenuPesquisaCamadaFinalComponent;
  let fixture: ComponentFixture<MenuPesquisaCamadaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPesquisaCamadaFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPesquisaCamadaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
