import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoEncontradaComponetComponent } from './pagina-no-encontrada-componet.component';

describe('PaginaNoEncontradaComponetComponent', () => {
  let component: PaginaNoEncontradaComponetComponent;
  let fixture: ComponentFixture<PaginaNoEncontradaComponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaNoEncontradaComponetComponent]
    });
    fixture = TestBed.createComponent(PaginaNoEncontradaComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
