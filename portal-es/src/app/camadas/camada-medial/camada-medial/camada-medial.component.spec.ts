import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamadaMedialComponent } from './camada-medial.component';

describe('CamadaMedialComponent', () => {
  let component: CamadaMedialComponent;
  let fixture: ComponentFixture<CamadaMedialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamadaMedialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamadaMedialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
