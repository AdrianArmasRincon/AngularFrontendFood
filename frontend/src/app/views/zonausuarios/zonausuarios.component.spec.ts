import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonausuariosComponent } from './zonausuarios.component';

describe('ZonausuariosComponent', () => {
  let component: ZonausuariosComponent;
  let fixture: ComponentFixture<ZonausuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonausuariosComponent]
    });
    fixture = TestBed.createComponent(ZonausuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
