import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFechasIzquierdoComponent } from './card-fechas-izquierdo.component';

describe('CardFechasIzquierdoComponent', () => {
  let component: CardFechasIzquierdoComponent;
  let fixture: ComponentFixture<CardFechasIzquierdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFechasIzquierdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFechasIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
