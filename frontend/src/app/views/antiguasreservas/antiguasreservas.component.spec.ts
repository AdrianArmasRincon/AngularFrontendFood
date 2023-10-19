import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiguasreservasComponent } from './antiguasreservas.component';

describe('AntiguasreservasComponent', () => {
  let component: AntiguasreservasComponent;
  let fixture: ComponentFixture<AntiguasreservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiguasreservasComponent]
    });
    fixture = TestBed.createComponent(AntiguasreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
