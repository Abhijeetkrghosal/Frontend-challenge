import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoanAmountComponent } from './loan-amount/loan-amount.component';
import { BenefitsCardsComponent } from './benefits-cards/benefits-cards.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [EligibilityCalculatorComponent, LoanAmountComponent, BenefitsCardsComponent, IconComponent],
  imports: [
    CommonModule,
    MatCardModule,MatSliderModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatSlideToggleModule
  ],
  exports: [
    EligibilityCalculatorComponent ,LoanAmountComponent ,BenefitsCardsComponent,IconComponent
  ]
})
export class SharedModule { }
