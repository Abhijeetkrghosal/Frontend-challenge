import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {
public existingLoanTitle:string='EMI of existing loan (optional)';
public existingLoanQuestion:string='Do you have any existing loans?';
public repaymentText:string='Repayment Tenure';
public eligibilityCalculator:string='Eligibility Calculator';
public incomeText:string='Monthly income';
public incomeValue:string='1,50,000';
public expenseText:string='Monthly Expense';
public expenseValue:string='50,000';
  constructor() { }
  amountSize: number = 100000;
  amountSizeExpense: number = 100000;
  updateAmount(event) {
    this.amountSize = event.value;
  }
  updateAmountExpense(event){
    this.amountSizeExpense = event.value;
  }
  ngOnInit(): void {
  }
  time: Time[] = [
    {value: 6, viewValue: 'Month',selected: true},
    {value: 1, viewValue: 'Year',selected: true},
    {value: 2, viewValue: 'Year',selected: true}
  ];
}
interface Time {
  value: number;
  viewValue: string;
  selected:boolean
}
