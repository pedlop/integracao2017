import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadoDireitoComponent } from './lado-direito.component';

describe('LadoDireitoComponent', () => {
  let component: LadoDireitoComponent;
  let fixture: ComponentFixture<LadoDireitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadoDireitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadoDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
