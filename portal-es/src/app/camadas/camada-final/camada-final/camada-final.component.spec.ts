import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamadaFinalComponent } from './camada-final.component';

describe('CamadaFinalComponent', () => {
  let component: CamadaFinalComponent;
  let fixture: ComponentFixture<CamadaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamadaFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamadaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
