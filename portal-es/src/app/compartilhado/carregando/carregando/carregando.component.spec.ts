import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregandoComponent } from './carregando.component';

describe('CarregandoComponent', () => {
  let component: CarregandoComponent;
  let fixture: ComponentFixture<CarregandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarregandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarregandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
