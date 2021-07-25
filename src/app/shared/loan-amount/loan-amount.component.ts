import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.css']
})
export class LoanAmountComponent implements OnInit {

  constructor() { }
  public loanAmountTitle:string = 'Loan Amount'
  public emiTitle:string = 'Your EMI will be'
  public monthlyIncome:any = '1,50,000'
  public totalEmi:any = '1,50,00'
  public buttonText:string='GET MONEY';
  ngOnInit(): void {
  }

}
