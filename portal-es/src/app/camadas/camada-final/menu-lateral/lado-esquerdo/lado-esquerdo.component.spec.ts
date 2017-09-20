import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadoEsquerdoComponent } from './lado-esquerdo.component';

describe('LadoEsquerdoComponent', () => {
  let component: LadoEsquerdoComponent;
  let fixture: ComponentFixture<LadoEsquerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadoEsquerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadoEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
