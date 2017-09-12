import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamadaInicialComponent } from './camada-inicial.component';

describe('CamadaInicialComponent', () => {
  let component: CamadaInicialComponent;
  let fixture: ComponentFixture<CamadaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamadaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamadaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
