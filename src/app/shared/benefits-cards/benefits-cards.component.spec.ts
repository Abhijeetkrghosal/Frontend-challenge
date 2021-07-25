import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsCardsComponent } from './benefits-cards.component';

describe('BenefitsCardsComponent', () => {
  let component: BenefitsCardsComponent;
  let fixture: ComponentFixture<BenefitsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
