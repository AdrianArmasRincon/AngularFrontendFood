import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoconfirmadoComponent } from './pedidoconfirmado.component';

describe('PedidoconfirmadoComponent', () => {
  let component: PedidoconfirmadoComponent;
  let fixture: ComponentFixture<PedidoconfirmadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoconfirmadoComponent]
    });
    fixture = TestBed.createComponent(PedidoconfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
