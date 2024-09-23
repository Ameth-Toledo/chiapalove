import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFechasComponent } from './card-fechas.component';

describe('CardFechasComponent', () => {
  let component: CardFechasComponent;
  let fixture: ComponentFixture<CardFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFechasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
