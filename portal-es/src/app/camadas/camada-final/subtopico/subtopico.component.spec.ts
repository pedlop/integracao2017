import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicoComponent } from './subtopico.component';

describe('SubtopicoComponent', () => {
  let component: SubtopicoComponent;
  let fixture: ComponentFixture<SubtopicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtopicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
