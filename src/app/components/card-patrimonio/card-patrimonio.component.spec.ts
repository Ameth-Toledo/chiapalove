import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatrimonioComponent } from './card-patrimonio.component';

describe('CardPatrimonioComponent', () => {
  let component: CardPatrimonioComponent;
  let fixture: ComponentFixture<CardPatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPatrimonioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
