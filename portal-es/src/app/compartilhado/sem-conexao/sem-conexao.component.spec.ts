import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemConexaoComponent } from './sem-conexao.component';

describe('SemConexaoComponent', () => {
  let component: SemConexaoComponent;
  let fixture: ComponentFixture<SemConexaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemConexaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemConexaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
